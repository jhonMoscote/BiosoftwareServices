import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RepuestosService {

  constructor(private firestore: AngularFirestore) { }

  agregarRepuesto(repuesto: any): Promise<any>{
    return this.firestore.collection('repuestos').add(repuesto);
   
  }
  getRepuestos(){
    return this.firestore.collection('repuestos').snapshotChanges();
  }
  getRepuesto(referencia: string): Observable<any>{
    return this.firestore.collection('repuestos').doc(referencia).snapshotChanges();
    
  }
  getRepuestoID(id: string): Observable<any>{
    return this.firestore.collection('repuestos').doc(id).snapshotChanges();
    
  }

  getRepuestoIDudapte(id: string, data :any): Promise<any>{
    return this.firestore.collection('repuestos').doc(id).update(data);
    
  }
  eliminarRepuesto(id: string): Promise<any> {
    return this.firestore.collection('repuestos').doc(id).delete();
  }
 
 
}
