import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

const REGEX = /\((Lobby)(.*?)\)/;

@Directive({
  selector: '[logFileInput]',
})
export class LogFileDirective {
  @Output() changedLog = new EventEmitter();

  @HostListener('change', ['$event'])
  public readFileName(event): void {
    const reader = new FileReader();

    reader.onload = () => {
      const trimToIds = (x) => x.split('U:1:')[1].slice(0,-1);
      const ids = reader.result
        .match(REGEX)[2]
        .split(' ')
        .splice(3)
        .map(trimToIds);

      this.changedLog.emit(ids);
    };



    reader.readAsText(event.target.files[0]);
  }
}
