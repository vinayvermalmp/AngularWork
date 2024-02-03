import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector: '[appBetterHighlight]'
})
export class BasicHighlightDirective implements OnInit {
    @Input() defaultColor: string = 'transparent';
    @Input('appBetterHighlight') highlightColor: string = 'blue';
    @HostBinding('style.backgroundColor') backgroundColor:string
   
    constructor(private elf: ElementRef, private renderer: Renderer2){}
    ngOnInit() {
        this.backgroundColor = this.defaultColor;
      // this.renderer.setStyle(this.elf.nativeElement,'background-color', 'blue');
    }

    @HostListener('mouseenter') mouseover(eventData: Event) {
       // this.renderer.setStyle(this.elf.nativeElement,'background-color', 'blue');
       this.backgroundColor = this.highlightColor;;
    }

    @HostListener('mouseleave') mouseleave(eventData: Event) {
       // this.renderer.setStyle(this.elf.nativeElement,'background-color', 'transparent');
       this.backgroundColor =this.defaultColor;
    }



}