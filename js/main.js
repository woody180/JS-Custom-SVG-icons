const main = document.querySelector('main');
for (const index in iconBase) {
    main.innerHTML += `<a href="#">
        <div class="icon-wrapper">
            <i class="icon" width="20" icon-name="${index}"></i>
            <div>${index}</div>
        </div>
        <div><input value='<i class="icon" icon-name="${index}" width="20"></i>' /> </div>
    </a>`
}

toIcon();


main.onclick = function(e) {
    if (e.target.closest('i')) {
        e.preventDefault();
        
        const el = e.target.closest('a'),
              inp = el.querySelector('input');
        
        
        inp.select();
        inp.setSelectionRange(0, 99999);
        document.execCommand("copy");
        
        alert('Icon is now in your clipboard ;)');
    }
}