import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Club } from 'src/app/services/Club.Model';
import { ClubService } from '../services/club.service';
import { createClient, PostgrestResponse } from '@supabase/supabase-js';
import { AlertController } from '@ionic/angular'; 


@Component({
  selector: 'app-clubs',
  templateUrl: './clubs.page.html',
  styleUrls: ['./clubs.page.scss'],
})
export class ClubsPage implements OnInit {
  id: number | null;
  club: Club | undefined;

  formData = {
    number: ''
  };

  private supabaseUrl = "https://ywnwejgjvmthpwohyjer.supabase.co";
  private supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl3bndlamdqdm10aHB3b2h5amVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzY0Mzg3OTUsImV4cCI6MTk5MjAxNDc5NX0.RY5l6fP6pKmhYtyD1Ms8fVR52HczAjOcAdGrvXeV-J8";
  private supabaseClient = createClient(this.supabaseUrl, this.supabaseKey);
  alertCtrl: any;
  obsForm: any;

  isValidInput(): boolean {
    const inputNumber = this.formData.number.trim();
    return inputNumber.startsWith('990') && inputNumber.length === 8;
  }

  async submitData() {
    if (this.formData.number.trim() !== '') {
      try {
        const { data, error } = await this.supabaseClient
          .from('students_joined')
          .insert([{ 
            idnumber: this.formData.number
          }]);

        if (error) {
          console.error(error);
          return;
        }
        
        if (this.club && this.club.joinLink) {
          window.open(this.club.joinLink, '_blank');
        } else{
          const alert = await this.alertController.create({
            header: 'Sorry :(',
            message: 'No link has been provided. Contact the president with the email provided if you wish to learn more about the club.',
            buttons: ['OK']
          });
          await alert.present();
          return;
        }
      
    
      } catch (error) {
        console.error(error);
      }
    }
  }


  
  count: number = 0;
  
  incrementCounter() {
    this.count++;
  }

/*
constructor(private activatedRoute: ActivatedRoute, private clubService: ClubService) { 
  
  const idParam = this.activatedRoute.snapshot.paramMap.get('id');
  this.id = idParam !== null ? +idParam : null; // Perform the conversion if idParam is not null
}*/
constructor(
  private activatedRoute: ActivatedRoute,
  private clubService: ClubService,
  private alertController: AlertController
) {
  const idParam = this.activatedRoute.snapshot.paramMap.get('id');
  this.id = idParam !== null ? +idParam : null; // Perform the conversion if idParam is not null
}

ngOnInit() {
  if (this.id !== null) {
    this.club = this.clubService.getClub(this.id);
  }
}
swiperSlideChanged(e: any) {
  console.log('chnaged: ', e);
}


  async fetchData() {
    const supabase = createClient('https://ywnwejgjvmthpwohyjer.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl3bndlamdqdm10aHB3b2h5amVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzY0Mzg3OTUsImV4cCI6MTk5MjAxNDc5NX0.RY5l6fP6pKmhYtyD1Ms8fVR52HczAjOcAdGrvXeV-J8');
  
    const { data, error }: PostgrestResponse<any> = await supabase
      .from('form_information')
      .select('*');

    if (error) {
      console.error('Error fetching data:', error);
     return;
    }

    console.log('Data:', data);
  }

}






