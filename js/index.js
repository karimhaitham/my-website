var main = document.getElementById('main')
                var body = document.getElementById('body')

                var loading = document.getElementById('loading')
                main.style.visibility = "hidden"
                body.style.backgroundColor = "#2c3e50"
  
                setTimeout(()=>{
                main.style.visibility = "visible"
                body.style.backgroundColor = "#d4e2e0"
                loading.style.display = "none"
                }, 5000)