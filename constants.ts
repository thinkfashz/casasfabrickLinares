import { Stage } from './types';

export const COSTO_M2 = 780000; // CLP
export const WHATSAPP_NUMBER = "56930121625";

export const STAGES: Stage[] = [
  { label: "Hito 1: Inicio & Radier", percent: 50, detail: "Movimiento de tierra, trazado y hormigonado de losa." },
  { label: "Hito 2: Estructura Metalcom", percent: 20, detail: "Montaje de perfiles estructurales y tabiquería." },
  { label: "Hito 3: Techumbre", percent: 10, detail: "Cubierta, hojalatería y aislación hídrica." },
  { label: "Hito 4: Cerramientos", percent: 10, detail: "Ventanas termopanel y puertas perimetrales." },
  { label: "Hito 5: Entrega Final", percent: 10, detail: "Terminaciones finas, pintura y aseo." },
];