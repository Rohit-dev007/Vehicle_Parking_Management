import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParkingService {
  parkingSlots = Array.from({ length: 30 }, (_, index) => ({
    id: index + 1,
    vehicleNumber: null as string | null,
    status: 'Available', // Set all slots to 'Available' by default
    reservationDetails: null as { date: string; time: string } | null // Add reservationDetails property
  }));

  getParkingSlots() {
    return this.parkingSlots;
  }

  updateSlotStatus(slotId: number, status: string, vehicleNumber: string | null = null) {
    const slot = this.parkingSlots.find(s => s.id === slotId);
    if (slot) {
      slot.status = status;
      slot.vehicleNumber = vehicleNumber;
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
}
// Removed duplicate ParkingService class definition