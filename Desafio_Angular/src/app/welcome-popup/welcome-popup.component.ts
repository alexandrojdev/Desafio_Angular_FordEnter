// src/app/welcome-popup/welcome-popup.component.ts

import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-welcome-popup',
  templateUrl: './welcome-popup.component.html',
  styleUrls: ['./welcome-popup.component.css']
})
export class WelcomePopupComponent implements OnInit {
  
  // Variável para controlar se o pop-up está visível ou não
  isPopupVisible: boolean = false;

  // Usa o EventEmitter para notificar o componente "pai" (App) quando fechar
  @Output() closePopup = new EventEmitter<void>();

  ngOnInit(): void {
    // 1. Lógica para verificar se o usuário já viu o pop-up
    const hasSeenPopup = localStorage.getItem('welcomePopupSeen');

    if (!hasSeenPopup) {
      this.isPopupVisible = true; // Mostrar se ainda não viu
    }
  }

  // Método chamado pelo botão "Fechar" do pop-up
  handleClose(): void {
    this.isPopupVisible = false;

    // 2. Salva a informação no navegador (localStorage) para não mostrar mais
    localStorage.setItem('welcomePopupSeen', 'true');

    // 3. Notifica o componente pai, caso ele precise saber que fechou
    this.closePopup.emit(); 
  }
}

