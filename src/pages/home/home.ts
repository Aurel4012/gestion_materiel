import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner ,BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  scanData : {};
  encodeData : string ;
  encodedData : {} ;
  options :BarcodeScannerOptions;
  constructor(public navCtrl: NavController, private barcodeScanner: BarcodeScanner) {
    
  }
    scan(){
        this.options = {
            prompt : "Scan du code barre "
        }
        this.barcodeScanner.scan(this.options).then((barcodeData) => {

            console.log(barcodeData);
            this.scanData = barcodeData;
        }, (err) => {
            console.log("Error occured : " + err);
        });         
    }    

    encodeText(){
        this.barcodeScanner.encode(this.barcodeScanner.Encode.TEXT_TYPE,this.encodeData).then((encodedData) => {
    
            console.log(encodedData);
            this.encodedData = encodedData;
    
        }, (err) => {
            console.log("Error occured : " + err);
        });                 
    }
}
 