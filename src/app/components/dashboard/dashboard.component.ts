import { Component, OnInit } from '@angular/core';
import { ParkingService } from '../../services/parking.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  parkingSlots: any[] = [];
  availableCount: number = 0;
  bookedCount: number = 0;
  reservedCount: number = 0;
  filteredSlots: any[] = [];

  constructor(private parkingService: ParkingService) {}

  ngOnInit(): void {
    this.parkingSlots = this.parkingService.getParkingSlots();
    this.calculateCounts();
  }

  calculateCounts() {
    this.availableCount = this.parkingSlots.filter(slot => slot.status === 'Available').length;
    this.bookedCount = this.parkingSlots.filter(slot => slot.status === 'Booked').length;
    this.reservedCount = this.parkingSlots.filter(slot => slot.status === 'Reserved').length;
  }

  filterSlots(status: string) {
    this.filteredSlots = this.parkingSlots.filter(slot => slot.status === status);
  }
}