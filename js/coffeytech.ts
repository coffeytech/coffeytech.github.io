namespace CoffeyTech {

    const Google_API_KEY = 'AIzaSyC6KhwfrD0o1Tq5_QXp7p12v7BPwlxS40Y';

    export class Page {
        
        static togglePowerButton(): void {

            var fn = document.body.classList.contains('power-off')
                ? 'remove'
                : 'add';

            document.body.classList[fn]('power-off');
        }

        static init(): void {

            // var powerButton: HTMLElement = <HTMLElement>document.querySelector(".logo > img:nth-child(2)");
            // powerButton.onclick = Page.togglePowerButton;
            
        }
    }
}

CoffeyTech.Page.init();