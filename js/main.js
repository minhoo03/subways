$(document).ready(() => {
    $('.gnb > ul > li').on('mouseenter', () => {
        $('.snb').css({'display':'inline-block'})
        $('header').stop().animate({
            'height':'405px'
        })
        $('.snb').stop().animate({
            'opacity': '1'
        })
    })

    $('.gnb > ul').on('mouseleave', () => {
        $('header').stop().animate({
            'height':'175px'
        })

        $('.snb').stop().animate({
            'opacity': '0'
        }, 300, () => {
            $('.snb').css({'display':'none'})
        })
    })

    // banner
    const banner = $('.main > .banner')

    banner.find('h2').animate({'opacity':'1','top' : '0'}, 700)
    banner.find('p').delay(300).animate({'opacity':'1','top' : '0'}, 700)
    banner.find('.img').delay(300).animate({'opacity':'1','top' : '0'}, 700)

    // sub header
    const subHeader = $('.main > .sub-header')
    const subTop = subHeader.find('.top')
    const subHeaderTop = subHeader.offset().top
    console.log(subHeaderTop)

    $(window).on('scroll', () => {
        const scroll = $(window).scrollTop()

        if(scroll > subHeaderTop){
            subHeader.addClass('fixed')
        } else{
            subHeader.removeClass('fixed')
        }
    })

    subTop.on('click', () => {
        $('html, body').animate({
            scrollTop: 0
        }, 700)
    })
    
    // select menu (api 사용을 위해 함수로 감쌈)
    const menu = $('#menu ul > li')

    const menuShow = (event) => {
        const target = event.currentTarget

        $(target).find('.ko_title').stop().animate({'top':'50px'},400)
        $(target).find('.en_title').stop().animate({'top':'95px'},400)
        $(target).find('.desc').stop().animate({'top':'125px','opacity':'1'},500)
        $(target).find('.icon').stop().animate({'bottom':'35px','opacity':'1'},300)  
    }

    const menuHide = (event) => {
        const target = event.currentTarget

        $(target).find('.ko_title').stop().animate({'top':'100px'},400)
        $(target).find('.en_title').stop().animate({'top':'145px'},400)
        $(target).find('.desc').stop().animate({'top':'200px','opacity':'0'},500)
        $(target).find('.icon').stop().animate({'bottom':'100px','opacity':'0'},300)
    }
   
   

    var menuTab = $('#menu-tab ul > li')

    menuTab.on('click', (event) => {
        // const {target : {currentTarget}} = event
        var target = event.currentTarget
        // menu라는 이름의 data를 가져옴 (149줄)
        var menuName = $(target).data('menu')
        
        menuTab.removeClass('active')
        $(target).addClass('active')

        $(menu).stop().animate({
            'opacity' : '0'
        }, 400 ,() => {
            $(menu).css({'display':'none'})

            if(menuName === 'all'){
                $(menu).stop().css({'display':'block'}).animate({'opacity':'1'})
            } else {
                $(`.${menuName}`).stop().css({'display':'block'}).animate({'opacity':'1'})
            }
        })
    })

         
    const templateSandwichLabel = (label) => {
        if(label){
            return `<div class="label">${label}</div>`
        } else {
            return ``
        }
    }
    
    const tamplateSandwich = (sandwich) => {
            const {ko_title, en_title, kcal, summary, type, img, label, view_id} = sandwich

            return `
                <li class="${type}">
                    <a href="#">
                        ${templateSandwichLabel(label)}
                        <div class="img">
                            <img src="${img}" alt="${ko_title}">
                        </div>
                        <strong class="ko_title">${ko_title}</strong>
                        <span class="en_title">${en_title}</span>
                        <span class="kcal">${kcal}</span>
                        <p class="desc">${summary}</p>
                        <div class="icon" data-id="${view_id}"></div>
                    </a>
                </li>
            `
        }

        const getSandwich = () => {
            // res => res  ↔  function(res) {return res}
            return fetch('http://localhost:3000/subway/sandwich', {
                'method' : 'GET',
                'headers' : {
                    'Content-Type': 'application/json'
                }
            }).then(res => res)
            .then(res => res.json())
        }

        const listSandwich = async () => {
            const sandwiches = await getSandwich()
            console.log(sandwiches)

            // sandwiches.then((data) => {
            //     console.log(data)
            // })

            const menu = document.getElementById('menu')
            const menuWrap = menu.querySelector('ul')

            // for(var i = 0; i >= sanwiches.length; i++)
            for(const sandwich of sandwiches){
                const node = $(tamplateSandwich(sandwich))[0]
                $(node).on('mouseenter', menuShow())
                $(node).on('mouseleave', menuHide())
                menuWrap.append(node)
            }
        }
        listSandwich()
})
