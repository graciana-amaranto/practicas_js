const d =document,
    n = navigator,
    ua = n.userAgent;   //ua = userAgent


export default function userDeviceInfo(id){
    const $id = d.getElementById(id),
        isMobile = {
            android: () => ua.match(/android/i),
            ios: () => ua.match(/iphone|ipad|ipod/i),
            windows: () => ua.match(/windows phone/i),
            any: function () {
                return this.android() || this.ios() || this.windows();
            }
        },
        isDesktop = {
            linux: () => ua.match(/linux/i),
            mac: () => ua.match(/mac os/i),
            windows: () => ua.match(/windows nt/i),
            any: function(){
                return this.linux() || this.mac() || this.windows();
            }
        },
        isBrowser = {
            chrome: () => ua.match(/chrome/i),
            safari: () => ua.match(/safari/i),
            firefox: () => ua.match(/firefox/i),
            opera: () => ua.match(/opera|opera mini/i),
            ie: () => ua.match(/msie|iemobile/i),
            edge: () =>ua.match(/egde/i),
            any: function (){
                return (this.chrome() || this.safari() || 
                this.firefox() || this.opera() || this.ie() || this.edge());
            }
        };
    
    $id.innerHTML = `
        <ul>
            <li> User Agent: <b> ${ua} </b> </li>  
            <li> Plataforma: <b> ${isMobile.any()? isMobile.any(): isDesktop.any()} </b> </li>  
            <li> Navegador: <b> ${isBrowser.any()} </b> </li>
        </ul>`  
     
    /*contenido exclusivo */
    if(isBrowser.chrome()){
        $id.innerHTML+= `<p><mark>Este contenido solo se ve en Chrome</mark></p>`; 
    }

    if(isBrowser.firefox()){
        $id.innerHTML+= `<p><mark>Este contenido solo se ve en Firefox</mark></p>`; 
    }

    /*Redirecciones  */
    if(isMobile.android()){    //si detecta que el disp tiene android, redirige automaticamente a google.com
        window.location.href = "https://google.com";
    }
}