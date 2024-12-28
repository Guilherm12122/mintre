export class WinUtils {

    static reloadPageWithDelay(time: number){
        setTimeout(() => {
            window.location.reload();
          }, time);
    }
}