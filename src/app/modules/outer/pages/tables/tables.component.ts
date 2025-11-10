import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-medical-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css'],
  imports: [FormsModule]
})
export class TablesComponent implements OnInit {
  medicalRecords: any[] = [];
  selectedRecord: any = null;
  editRecord: any = null;

  constructor() { }

  ngOnInit(): void {
    // Simulamos datos de historial médico veterinario
    this.medicalRecords = [
      {
        id: 1,
        petName: 'Max',
        ownerName: 'Juan Pérez',
        date: '2024-10-15',
        diagnosis: 'Gastritis leve',
        treatment: 'Dieta blanda y medicación'
      },
      {
        id: 2,
        petName: 'Luna',
        ownerName: 'María García',
        date: '2024-10-20',
        diagnosis: 'Vacunación anual',
        treatment: 'Vacunas pentavalente y antirrábica'
      }
    ];
  }

  addMedicalRecord(record: any, form?: any) {
    // Simulamos la creación de un nuevo historial
    const newId = this.medicalRecords.length + 1;
    const newRecord = { ...record, id: newId };
    this.medicalRecords.push(newRecord);
    
    alert('Historial médico creado exitosamente');
    // Cierra el modal de agregar historial
    const modal = document.getElementById('medicalRecordModal');
    if (modal) {
      // @ts-ignore
      const bsModal = window.bootstrap.Modal.getInstance(modal);
      if (bsModal) bsModal.hide();
    }
    if (form) {
      form.resetForm();
    }
  }

  verHistorial(item: any) {
    this.selectedRecord = item;
    const modal = document.getElementById('verHistorialModal');
    if (modal) {
      // @ts-ignore
      const bsModal = new window.bootstrap.Modal(modal);
      bsModal.show();
    }
  }

  abrirEditarHistorial(item: any) {
    this.editRecord = { ...item };
    const modal = document.getElementById('editarHistorialModal');
    if (modal) {
      // @ts-ignore
      const bsModal = new window.bootstrap.Modal(modal);
      bsModal.show();
    }
  }

  updateMedicalRecord(form: any) {
    // Simulamos la actualización del historial
    const index = this.medicalRecords.findIndex(record => record.id === this.editRecord.id);
    if (index !== -1) {
      this.medicalRecords[index] = { ...this.editRecord };
      alert('Historial médico actualizado exitosamente');
      
      // Cierra el modal
      const modal = document.getElementById('editarHistorialModal');
      if (modal) {
        // @ts-ignore
        const bsModal = window.bootstrap.Modal.getInstance(modal);
        bsModal.hide();
      }
    }
  }

  eliminarHistorial(item: any) {
    if (window.confirm(`¿Estás seguro de eliminar el historial de ${item.petName}?`)) {
      const index = this.medicalRecords.findIndex(record => record.id === item.id);
      if (index !== -1) {
        this.medicalRecords.splice(index, 1);
        alert('Historial médico eliminado exitosamente');
      }
    }
  }
}

function then(callback: (result: any) => void) {
  callback({ isConfirmed: true });
}

