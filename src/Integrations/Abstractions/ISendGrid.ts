export interface IMail {
  from: string;
  to: string;
  subject: string;
  message: string;
}

export interface ISendGridIntegration {
  send(mail: IMail);
}
