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
  reservationDate: string = '';
  reservationTime: string = '';
  isLoggedIn: boolean = false;

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
      this.selectedSlot = slot;
    } else {
      alert(`Slot ${slot.id} is already ${slot.status}`);
    }
  }

  bookSlot() {
    if (this.selectedSlot && this.vehicleNumber) {
      this.parkingService.updateSlotStatus(this.selectedSlot.id, 'Booked', this.vehicleNumber);
      alert(`Slot ${this.selectedSlot.id} booked successfully for vehicle ${this.vehicleNumber}`);
      this.selectedSlot = null;
      this.vehicleNumber = '';
    } else {
      alert('Please select a slot and enter a vehicle number');
    }
  }

  reserveSlot() {
    if (this.selectedSlot && this.vehicleNumber && this.reservationDate && this.reservationTime) {
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
}