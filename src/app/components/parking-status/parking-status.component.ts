import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ParkingService } from '../../services/parking.service';

@Component({
  selector: 'app-parking-status',
  templateUrl: './parking-status.component.html',
  styleUrls: ['./parking-status.component.css']
})
export class ParkingStatusComponent implements OnInit {
    parkingSlots: any[] = [];
    selectedSlot: any = null;
    vehicleNumber: string = '';
    fromDate: string = '';
    toDate: string = '';
    mobileNumber: string = '';
    isLoggedIn: boolean = false;
    reservationDate: string = '';
    reservationTime: string = '';
  
    constructor(private router: Router, private parkingService: ParkingService) {}
  
    ngOnInit(): void {
      this.parkingSlots = this.parkingService.getParkingSlots();
      const loginStatus = localStorage.getItem('isLoggedIn');
      this.isLoggedIn = loginStatus === 'true';
    }
  
    selectSlot(slot: any) {
      if (!this.isLoggedIn) {
        alert('You need to log in to book a slot.');
        this.router.navigate(['/login']);
      } else if (slot.status === 'Available') {
        this.selectedSlot = slot; // Set the selected slot to open the popup
      } else {
        alert(`Slot ${slot.id} is already ${slot.status}`);
      }
    }
  
    closePopup() {
      this.selectedSlot = null; // Close the popup
      this.vehicleNumber = '';
      this.fromDate = '';
      this.toDate = '';
      this.mobileNumber = '';
    }
  
    bookSlot() {
      if (this.selectedSlot && this.vehicleNumber && this.fromDate && this.toDate && this.mobileNumber) {
        if (this.parkingService.isVehicleAlreadyBooked(this.vehicleNumber)) {
          alert(`Vehicle ${this.vehicleNumber} has already booked or reserved a slot.`);
          return;
        }
        const bookingDetails = {
          fromDate: this.fromDate,
          toDate: this.toDate,
          mobileNumber: this.mobileNumber
        };
        this.parkingService.updateSlotStatus(this.selectedSlot.id, 'Booked', this.vehicleNumber, bookingDetails);
        alert(`Slot ${this.selectedSlot.id} booked successfully for vehicle ${this.vehicleNumber}`);
        this.closePopup();
      } else {
        alert('Please fill in all the required details to book the slot.');
      }
    }
  


  reserveSlot() {
    if (this.selectedSlot && this.vehicleNumber && this.reservationDate && this.reservationTime) {
      if (this.parkingService.isVehicleAlreadyBooked(this.vehicleNumber)) {
        alert(`Vehicle ${this.vehicleNumber} has already booked or reserved a slot.`);
        return;
      }
      this.parkingService.reserveSlot(
        this.selectedSlot.id,
        this.vehicleNumber,
        this.reservationDate,
        this.reservationTime
      );
      alert(`Slot ${this.selectedSlot.id} reserved successfully for vehicle ${this.vehicleNumber}`);
      this.selectedSlot = null;
      this.vehicleNumber = '';
      this.reservationDate = '';
      this.reservationTime = '';
    } else {
      alert('Please select a slot, enter a vehicle number, and provide reservation date and time');
    }
  }
  cancelSlot(slot: any) {
    if (slot.status === 'Available') {
      alert(`Slot ${slot.id} is already available.`);
      return;
    }
  
    const confirmCancel = confirm(`Are you sure you want to cancel the ${slot.status.toLowerCase()} for slot ${slot.id}?`);
    if (confirmCancel) {
      this.parkingService.cancelSlot(slot.id);
      alert(`Slot ${slot.id} has been successfully canceled.`);
      this.parkingSlots = this.parkingService.getParkingSlots(); // Refresh the slots
    }
  }
  
}