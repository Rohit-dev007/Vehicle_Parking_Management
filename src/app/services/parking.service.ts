import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParkingService {
  private parkingSlots: { id: number; status: string; vehicleNumber: string | null; reservationDetails: { date: string; time: string } | null; bookingDetails?: any }[] = [
    { id: 1, status: 'Available', vehicleNumber: null, reservationDetails: null },
    { id: 2, status: 'Available', vehicleNumber: null, reservationDetails: null },
    { id: 3, status: 'Available', vehicleNumber: null, reservationDetails: null },
    { id: 4, status: 'Available', vehicleNumber: null, reservationDetails: null },
    { id: 5, status: 'Available', vehicleNumber: null, reservationDetails: null },
    { id: 6, status: 'Available', vehicleNumber: null, reservationDetails: null },
    { id: 7, status: 'Available', vehicleNumber: null, reservationDetails: null },
    { id: 8, status: 'Available', vehicleNumber: null, reservationDetails: null },
    { id: 9, status: 'Available', vehicleNumber: null, reservationDetails: null },
    { id: 10, status: 'Available', vehicleNumber: null, reservationDetails: null },
    { id: 11, status: 'Available', vehicleNumber: null, reservationDetails: null },
    { id: 12, status: 'Available', vehicleNumber: null, reservationDetails: null },
    { id: 13, status: 'Available', vehicleNumber: null, reservationDetails: null },
    { id: 14, status: 'Available', vehicleNumber: null, reservationDetails: null },
    { id: 15, status: 'Available', vehicleNumber: null, reservationDetails: null },
    { id: 16, status: 'Available', vehicleNumber: null, reservationDetails: null },
    { id: 17, status: 'Available', vehicleNumber: null, reservationDetails: null },
    { id: 18, status: 'Available', vehicleNumber: null, reservationDetails: null },
    { id: 19, status: 'Available', vehicleNumber: null, reservationDetails: null },
    { id: 20, status: 'Available', vehicleNumber: null, reservationDetails: null },
    { id: 21, status: 'Available', vehicleNumber: null, reservationDetails: null },
    { id: 22, status: 'Available', vehicleNumber: null, reservationDetails: null },
    { id: 23, status: 'Available', vehicleNumber: null, reservationDetails: null },
    { id: 24, status: 'Available', vehicleNumber: null, reservationDetails: null },
    { id: 25, status: 'Available', vehicleNumber: null, reservationDetails: null },
    { id: 26, status: 'Available', vehicleNumber: null, reservationDetails: null },
    { id: 27, status: 'Available', vehicleNumber: null, reservationDetails: null },
    { id: 28, status: 'Available', vehicleNumber: null, reservationDetails: null },
    { id: 29, status: 'Available', vehicleNumber: null, reservationDetails: null },
    { id: 30, status: 'Available', vehicleNumber: null, reservationDetails: null }
  ];

  getParkingSlots() {
    return this.parkingSlots;
  }

  isVehicleAlreadyBooked(vehicleNumber: string): boolean {
    return this.parkingSlots.some(
      slot =>
        (slot.status === 'Booked' || slot.status === 'Reserved') &&
        slot.vehicleNumber === vehicleNumber
    );
  }

  updateSlotStatus(slotId: number, status: string, vehicleNumber: string, bookingDetails: any) {
    const slot = this.parkingSlots.find(s => s.id === slotId);
    if (slot) {
      slot.status = status;
      slot.vehicleNumber = vehicleNumber;
      slot.bookingDetails = bookingDetails; // Store additional booking details
    }
  }

  reserveSlot(slotId: number, vehicleNumber: string, date: string, time: string) {
    const slot = this.parkingSlots.find(s => s.id === slotId);
    if (slot) {
      slot.status = 'Reserved';
      slot.vehicleNumber = vehicleNumber;
      slot.reservationDetails = { date, time };
    }
  }
  cancelSlot(slotId: number) {
    const slot = this.parkingSlots.find(s => s.id === slotId);
    if (slot) {
      slot.status = 'Available';
      slot.vehicleNumber = null;
      slot.reservationDetails = null;
    }
  }
}