function toggle_home(){
            var div_about = document.getElementById('about-id');
            var div_contact = document.getElementById('contact-id');
            var div_gallery = document.getElementById('gallery-id');

            var left_images   = document.querySelectorAll('.gallery-left-image-div');
            var center_images = document.querySelectorAll('.gallery-center-image-div');
            var right_images  = document.querySelectorAll('.gallery-right-image-div');

            var div_work = document.getElementById('work-id');
            var blog_header = document.getElementById('blog-heading-about');
            var about_paragraph = document.getElementById('about-paragraph');
            var heading = document.getElementById('about-header');
            var about_paragraph_2 = document.getElementById('about-para-sec');
            var languages = document.getElementById('about-range-title');
            var rangebox_1 = document.getElementById('inner-range-box-1');
            var rangebox_2 = document.getElementById('inner-range-box-2');
            var rangebox_3 = document.getElementById('inner-range-box-3');
            var rangebox_4 = document.getElementById('inner-range-box-4');
            var rangebox_5 = document.getElementById('inner-range-box-5');
            var rangebox_6 = document.getElementById('inner-range-box-6');
            var rangebox_7 = document.getElementById('inner-range-box-7');
            var rangebox_8 = document.getElementById('inner-range-box-8');

            var blog_header2 = document.getElementById('blog-heading-gallery');
            var blog_header3 = document.getElementById('blog-heading-contact');
            var gallery_des = document.getElementById('gallery-description');

            var blog_header4=document.getElementById('blog-heading-work');
            var work_blog_description= document.getElementById('work-blog-description');
            var work_game_content = document.getElementById('work-game-content');
            var work_project_content= document.getElementById('work-project-content');
            var work_project_content = document.getElementById('work-project-content');
            var work_hangman_button = document.getElementById('hangman-button');
            var work_titactoe_button = document.getElementById('tictactoe-button');
            var work_rpg_button = document.getElementById('rpg-button');
            var hangman_game_table = document.getElementById('hangman-game-table');
            var tictactoe_game_table = document.getElementById('tictactoe-game-table');
            var rpg_game_table = document.getElementById('rpg-game-table');

            var contact_description=document.getElementById('contact-description');
            var contact_form=document.getElementById('contact-form');
            var facebook_div = document.getElementById('contact-facebook-div');
            var instagram_div = document.getElementById('contact-instagram-div');
            var twitter_div= document.getElementById('contact-twitter-div');
            var linkedin_div = document.getElementById('contact-linkedin-div');

            div_about.classList.remove('show');
            div_contact.classList.remove('show');
            div_gallery.classList.remove('show');
            left_images.forEach(function(image, index) {setTimeout(function(){image.classList.remove('show')}, 20 + (index * 1));});
            center_images.forEach(function(image, index) {setTimeout(function(){image.classList.remove('show')}, 10 + (index * 1));});
            right_images.forEach(function(image, index) {setTimeout(function(){image.classList.remove('show')}, 1 + (index * 1));});

            div_work.classList.remove('show');
            blog_header4.classList.remove('show');
            work_blog_description.classList.remove('show');
            work_game_content.classList.remove('after');
            work_project_content.classList.remove('after');
            work_titactoe_button.classList.remove('hide');
            work_rpg_button.classList.remove('hide');
            work_hangman_button.classList.remove('hide');
            setTimeout(function(){work_game_content.classList.remove('focus')},10);
            setTimeout(function(){work_project_content.classList.remove('focus')},10);
            setTimeout(function(){hangman_game_table.classList.remove('show')},10);
            setTimeout(function(){tictactoe_game_table.classList.remove('show')},10);
            setTimeout(function(){rpg_game_table.classList.remove('show')},10);
            setTimeout(function(){work_project_content.classList.remove('collapse')},10);

            setTimeout(function(){heading.classList.remove('show')},15);
            setTimeout(function(){about_paragraph.classList.remove('show')},10);
            setTimeout(function(){blog_header.classList.remove('show')},10);
            setTimeout(function(){about_paragraph_2.classList.remove('show')},10);
            setTimeout(function(){rangebox_1.classList.remove("animate");}, 10);
            setTimeout(function(){rangebox_2.classList.remove("animate");}, 10);
            setTimeout(function(){rangebox_3.classList.remove("animate");}, 10);
            setTimeout(function(){rangebox_4.classList.remove("animate");}, 10);
            setTimeout(function(){rangebox_5.classList.remove("animate");}, 10);
            setTimeout(function(){rangebox_6.classList.remove("animate");}, 10);
            setTimeout(function(){rangebox_7.classList.remove("animate");}, 10);
            setTimeout(function(){rangebox_8.classList.remove("animate");}, 10);
            setTimeout(function(){languages.classList.remove('show')}, 10);
            setTimeout(function(){gallery_des.classList.remove('show')},10);
            setTimeout(function(){blog_header2.classList.remove('show')},10);
            setTimeout(function(){about_paragraph_2.classList.remove('show')},10);
            setTimeout(function(){blog_header3.classList.remove('show')},10);
            setTimeout(function(){contact_description.classList.remove('show')},10);
            setTimeout(function(){contact_form.classList.remove('show')},10);
            facebook_div.classList.remove('show');
            instagram_div.classList.remove('show');
            twitter_div.classList.remove('show');
            linkedin_div.classList.remove('show');

            


        }

        function toggle_about() {
            var blog_header = document.getElementById('blog-heading-about');
            var about_paragraph = document.getElementById('about-paragraph');
            var heading = document.getElementById('about-header');
            var about_paragraph_2 = document.getElementById('about-para-sec');
            var languages = document.getElementById('about-range-title');
            var rangebox_1 = document.getElementById('inner-range-box-1');
            var rangebox_2 = document.getElementById('inner-range-box-2');
            var rangebox_3 = document.getElementById('inner-range-box-3');
            var rangebox_4 = document.getElementById('inner-range-box-4');
            var rangebox_5 = document.getElementById('inner-range-box-5');
            var rangebox_6 = document.getElementById('inner-range-box-6');
            var rangebox_7 = document.getElementById('inner-range-box-7');
            var rangebox_8 = document.getElementById('inner-range-box-8');
            var blog_header3 = document.getElementById('blog-heading-contact');
            var blog_header4 = document.getElementById('blog-heading-work');
            var work_blog_description = document.getElementById('work-blog-description');
            var work_game_content =document.getElementById('work-game-content');
            var work_project_content = document.getElementById('work-project-content');
            var work_hangman_button = document.getElementById('hangman-button');
            var work_titactoe_button = document.getElementById('tictactoe-button');
            var work_rpg_button = document.getElementById('rpg-button');
            var hangman_game_table = document.getElementById('hangman-game-table');
            var tictactoe_game_table = document.getElementById('tictactoe-game-table');
            var rpg_game_table = document.getElementById('rpg-game-table');
            var gallery_des = document.getElementById('gallery-description');
            var div_about = document.getElementById('about-id');
            var div_contact = document.getElementById('contact-id');
            var div_gallery = document.getElementById('gallery-id');
            var left_images   = document.querySelectorAll('.gallery-left-image-div');
            var center_images = document.querySelectorAll('.gallery-center-image-div');
            var right_images  = document.querySelectorAll('.gallery-right-image-div');

            var div_work = document.getElementById('work-id');
            
            var contact_description=document.getElementById('contact-description');
            var contact_form = document.getElementById('contact-form');
            var facebook_div = document.getElementById('contact-facebook-div');
            var instagram_div = document.getElementById('contact-instagram-div');
            var twitter_div= document.getElementById('contact-twitter-div');
            var linkedin_div = document.getElementById('contact-linkedin-div');

            div_gallery.classList.remove('show');
            setTimeout(function(){gallery_des.classList.remove('show')},10);
            left_images.forEach(function(image, index) {setTimeout(function(){image.classList.remove('show')}, 20 + (index * 1));});
            center_images.forEach(function(image, index) {setTimeout(function(){image.classList.remove('show')}, 10 + (index * 1));});
            right_images.forEach(function(image, index) {setTimeout(function(){image.classList.remove('show')}, 1 + (index * 1));});

            if (div_about.classList.contains('show')){
                div_about.classList.remove('show');
                setTimeout(function(){about_paragraph.classList.remove('show')},10);
                setTimeout(function(){blog_header.classList.remove('show')},10);
                setTimeout(function(){about_paragraph_2.classList.remove('show')},10);
                setTimeout(function(){heading.classList.remove('show')},10);
                setTimeout(function(){rangebox_1.classList.remove("animate");}, 10);
                setTimeout(function(){rangebox_2.classList.remove("animate");}, 10);
                setTimeout(function(){rangebox_3.classList.remove("animate");}, 10);
                setTimeout(function(){rangebox_4.classList.remove("animate");}, 10);
                setTimeout(function(){rangebox_5.classList.remove("animate");}, 10);
                setTimeout(function(){rangebox_6.classList.remove("animate");}, 10);
                setTimeout(function(){rangebox_7.classList.remove("animate");}, 10);
                setTimeout(function(){rangebox_8.classList.remove("animate");}, 10);
                setTimeout(function(){languages.classList.remove('show')}, 10);
                
            } else {
                div_about.classList.add('show');
                setTimeout(function(){about_paragraph.classList.add('show')},400);
                setTimeout(function(){blog_header.classList.add('show')}, 400);
                setTimeout(function(){about_paragraph_2.classList.add('show')},400);
                setTimeout(function(){heading.classList.add('show')},450);
                setTimeout(function(){rangebox_1.classList.add('animate');}, 200);
                setTimeout(function(){rangebox_2.classList.add('animate');}, 200);
                setTimeout(function(){rangebox_3.classList.add('animate');}, 200);
                setTimeout(function(){rangebox_4.classList.add('animate');}, 200);
                setTimeout(function(){rangebox_5.classList.add('animate');}, 200);
                setTimeout(function(){rangebox_6.classList.add('animate');}, 200);
                setTimeout(function(){rangebox_7.classList.add('animate');}, 200);
                setTimeout(function(){rangebox_8.classList.add('animate');}, 200);
                setTimeout(function(){languages.classList.add('show')},200);

                if(div_contact.classList.contains('show') ){
                    div_contact.classList.remove('show');
                    blog_header3.classList.remove('show');
                    contact_description.classList.remove('show');
                    contact_form.classList.remove('show');
                    facebook_div.classList.remove('show');
                    instagram_div.classList.remove('show');
                    twitter_div.classList.remove('show');
                    linkedin_div.classList.remove('show');
                }
                else if(div_work.classList.contains('show')){
                    div_work.classList.remove('show');
                    blog_header4.classList.remove('show');
                    work_blog_description.classList.remove('show');                    
                    work_game_content.classList.remove('after');
                    work_game_content.classList.remove('focus');                    
                    work_project_content.classList.remove('after');
                    work_project_content.classList.remove('focus');
                    work_titactoe_button.classList.remove('hide');
                    work_rpg_button.classList.remove('hide');
                    work_hangman_button.classList.remove('hide');
    
                    setTimeout(function(){work_project_content.classList.remove('collapse')},10);
                    setTimeout(function(){work_game_content.classList.remove('focus')},10);
                    setTimeout(function(){work_project_content.classList.remove('focus')},10);
                    setTimeout(function(){hangman_game_table.classList.remove('show')},10);
                    setTimeout(function(){tictactoe_game_table.classList.remove('show')},10);
                    setTimeout(function(){rpg_game_table.classList.remove('show')},10);
                }
            }
            
        }
/*this shit right here is gon be the root cause of my hairloss

            const scrollButton = document.getElementById('gallery');
            const scrollableDiv = document.querySelector('gallery-description');

            scrollButton.addEventListener('click', () => {scrollableDiv.scrollTop = scrollableDiv.scrollHeight;scrollableDiv.animate({scrollTop: 0},{duration: 500,easing: 'ease-out'});});
        */
        function toggle_gallery() {
        
            var div_about = document.getElementById('about-id');
            var div_contact = document.getElementById('contact-id');
            var div_gallery = document.getElementById('gallery-id');
            var blog_header = document.getElementById('blog-heading-about');
            var about_paragraph = document.getElementById('about-paragraph');
            var heading = document.getElementById('about-header');
            var about_paragraph_2 = document.getElementById('about-para-sec');
            var languages = document.getElementById('about-range-title');
            var rangebox_1 = document.getElementById('inner-range-box-1');
            var rangebox_2 = document.getElementById('inner-range-box-2');
            var rangebox_3 = document.getElementById('inner-range-box-3');
            var rangebox_4 = document.getElementById('inner-range-box-4');
            var rangebox_5 = document.getElementById('inner-range-box-5');
            var rangebox_6 = document.getElementById('inner-range-box-6');
            var rangebox_7 = document.getElementById('inner-range-box-7');
            var rangebox_7 = document.getElementById('inner-range-box-8');
            var blog_header2 = document.getElementById('blog-heading-gallery');
            var blog_header3 = document.getElementById('blog-heading-contact');
            var gallery_des = document.getElementById('gallery-description');
            
            var left_images = document.querySelectorAll('.gallery-left-image-div');
            var center_images=document.querySelectorAll('.gallery-center-image-div');
            var right_images= document.querySelectorAll('.gallery-right-image-div');


            var contact_description=document.getElementById('contact-description');
            var contact_form=document.getElementById('contact-form');
            var facebook_div = document.getElementById('contact-facebook-div');
            var instagram_div = document.getElementById('contact-instagram-div');
            var twitter_div= document.getElementById('contact-twitter-div');
            var linkedin_div = document.getElementById('contact-linkedin-div');

            if (div_gallery.classList.contains('show')){
                div_gallery.classList.remove('show');

                setTimeout(function(){blog_header2.classList.remove('show')},100);
                setTimeout(function(){gallery_des.classList.remove('show')},100);
                left_images.forEach(function(image, index) {setTimeout(function(){image.classList.remove('show')}, 20 + (index * 1));});
                center_images.forEach(function(image, index) {setTimeout(function(){image.classList.remove('show')}, 10 + (index * 1));});
                right_images.forEach(function(image, index) {setTimeout(function(){image.classList.remove('show')}, 1 + (index * 1));});
            } 
            else {
                div_gallery.classList.add('show');
                setTimeout(function(){blog_header2.classList.add('show')},400);
                setTimeout(function(){gallery_des.classList.add('show')},400);
                left_images.forEach(function(image, index) {setTimeout(function(){image.classList.add('show')}, 400 + (index * 150));});
                center_images.forEach(function(image, index) {setTimeout(function(){image.classList.add('show')}, 550 + (index * 150));});
                right_images.forEach(function(image, index) {setTimeout(function(){image.classList.add('show')}, 800 + (index * 150));});
                if(div_about.classList.contains('show')){
                    div_about.classList.remove('show');
                    setTimeout(function(){heading.classList.remove('show')},15);
                    setTimeout(function(){about_paragraph.classList.remove('show')},10);
                    setTimeout(function(){blog_header.classList.remove('show')},10);
                    setTimeout(function(){blog_header2.classList.remove('show')},10);
                    setTimeout(function(){blog_header3.classList.remove('show')},10);
                    setTimeout(function(){about_paragraph_2.classList.remove('show')},10);
                    setTimeout(function(){rangebox_1.classList.remove("animate");}, 10);
                    setTimeout(function(){rangebox_2.classList.remove("animate");}, 10);
                    setTimeout(function(){rangebox_3.classList.remove("animate");}, 10);
                    setTimeout(function(){rangebox_4.classList.remove("animate");}, 10);
                    setTimeout(function(){rangebox_5.classList.remove("animate");}, 10);
                    setTimeout(function(){rangebox_6.classList.remove("animate");}, 10);
                    setTimeout(function(){rangebox_7.classList.remove("animate");}, 10);
                    setTimeout(function(){rangebox_8.classList.remove("animate");}, 10);
                    setTimeout(function(){languages.classList.remove('show')}, 10);
                }
                else if(div_contact.classList.contains('show')){
                    div_contact.classList.remove('show');
                    setTimeout(function(){blog_header3.classList.remove('show')},10);
                    setTimeout(function(){contact_description.classList.remove('show')},10);
                    setTimeout(function(){contact_form.classList.remove('show')},10);
                    facebook_div.classList.remove('show');
                    instagram_div.classList.remove('show');
                    twitter_div.classList.remove('show');
                    linkedin_div.classList.remove('show');

                }
            }
            
        }
        function toggle_contact() {
            
            var div_contact = document.getElementById('contact-id');
            var div_work = document.getElementById('work-id');
            var blog_header3 = document.getElementById('blog-heading-contact');
            var blog_header4 = document.getElementById('blog-heading-work');
            var work_blog_description = document.getElementById('work-blog-description');
            var work_game_content = document.getElementById('work-game-content');
            var work_project_content = document.getElementById('work-project-content');
            var work_hangman_button = document.getElementById('hangman-button');
            var work_titactoe_button = document.getElementById('tictactoe-button');
            var work_rpg_button = document.getElementById('rpg-button');
            var hangman_game_table = document.getElementById('hangman-game-table');
            var tictactoe_game_table = document.getElementById('tictactoe-game-table');
            var rpg_game_table = document.getElementById('rpg-game-table');

            var contact_description=document.getElementById('contact-description');
            var contact_form=document.getElementById('contact-form');
            var facebook_div = document.getElementById('contact-facebook-div');
            var instagram_div = document.getElementById('contact-instagram-div');
            var twitter_div= document.getElementById('contact-twitter-div');
            var linkedin_div = document.getElementById('contact-linkedin-div');

            if (div_contact.classList.contains('show')) {
                setTimeout(function(){div_contact.classList.remove('show')},10);
                blog_header3.classList.remove('show');
                contact_description.classList.remove('show');
                contact_form.classList.remove('show');
                facebook_div.classList.remove('show');
                instagram_div.classList.remove('show');
                twitter_div.classList.remove('show');
                linkedin_div.classList.remove('show');
            } else {
                div_contact.classList.add('show');
                setTimeout(function(){blog_header3.classList.add('show')},400);
                setTimeout(function(){contact_description.classList.add('show')},400);
                setTimeout(function(){contact_form.classList.add('show')},400);
                setTimeout(function(){facebook_div.classList.add('show')},500);
                setTimeout(function(){instagram_div.classList.add('show')},600);
                setTimeout(function(){twitter_div.classList.add('show')},760);
                setTimeout(function(){linkedin_div.classList.add('show')},1000);
                if(div_work.classList.contains('show')){
                    div_work.classList.remove('show');
                    blog_header4.classList.remove('show');
                    work_blog_description.classList.remove('show');
                    work_game_content.classList.remove('after');
                    work_game_content.classList.remove('focus');                    
                    work_project_content.classList.remove('after');
                    work_project_content.classList.remove('focus');
                    work_titactoe_button.classList.remove('hide');
                    work_rpg_button.classList.remove('hide');
                    work_hangman_button.classList.remove('hide');
                    setTimeout(function(){work_game_content.classList.remove('focus')},10);
                    setTimeout(function(){work_project_content.classList.remove('focus')},10);
                    setTimeout(function(){work_project_content.classList.remove('collapse')},10);
                    setTimeout(function(){hangman_game_table.classList.remove('show')},10);
                    setTimeout(function(){tictactoe_game_table.classList.remove('show')},10);
                    setTimeout(function(){rpg_game_table.classList.remove('show')},10);
                }
            }
        }
        
        function toggle_work() {
            var div_contact = document.getElementById('contact-id');
            var div_gallery = document.getElementById('gallery-id');
            var div_work = document.getElementById('work-id');
            var contact_description = document.getElementById('contact-description');
            var blog_header3 = document.getElementById('blog-heading-contact');
            var blog_header4 = document.getElementById('blog-heading-work');
            var work_blog_description= document.getElementById('work-blog-description');
            var work_game_content = document.getElementById('work-game-content');
            var work_project_content = document.getElementById('work-project-content');
            var work_hangman_button = document.getElementById('hangman-button');
            var work_titactoe_button = document.getElementById('tictactoe-button');
            var work_rpg_button = document.getElementById('rpg-button');
            var hangman_game_table = document.getElementById('hangman-game-table');
            var tictactoe_game_table = document.getElementById('tictactoe-game-table');
            var rpg_game_table = document.getElementById('rpg-game-table');
            var contact_form = document.getElementById('contact-form');
            
            var facebook_div = document.getElementById('contact-facebook-div');
            var instagram_div = document.getElementById('contact-instagram-div');
            var twitter_div= document.getElementById('contact-twitter-div');
            var linkedin_div = document.getElementById('contact-linkedin-div');

            var left_images   = document.querySelectorAll('.gallery-left-image-div');
            var center_images = document.querySelectorAll('.gallery-center-image-div');
            var right_images  = document.querySelectorAll('.gallery-right-image-div');

            if (div_work.classList.contains('show')) {
                div_work.classList.remove('show');
                setTimeout(function(){blog_header4.classList.remove('show')},10);
                work_blog_description.classList.remove('show');
                work_game_content.classList.remove('after');
                work_game_content.classList.remove('focus');                    
                work_project_content.classList.remove('after');
                work_project_content.classList.remove('focus');
                work_titactoe_button.classList.remove('hide');
                work_rpg_button.classList.remove('hide');
                work_hangman_button.classList.remove('hide');
                setTimeout(function(){work_game_content.classList.remove('focus')},10);
                setTimeout(function(){work_project_content.classList.remove('focus')},10);
                setTimeout(function(){work_project_content.classList.remove('collapse')},10);
                setTimeout(function(){hangman_game_table.classList.remove('show')},10);
                setTimeout(function(){tictactoe_game_table.classList.remove('show')},10);
                setTimeout(function(){rpg_game_table.classList.remove('show')},10);

            } else {
                div_work.classList.add('show');
                setTimeout(function(){blog_header4.classList.add('show')},400);
                setTimeout(function(){work_blog_description.classList.add('show')},450);
                setTimeout(function(){work_game_content.classList.add('after')},500);
                setTimeout(function(){work_project_content.classList.add('after')},700);

                if(div_contact.classList.contains('show') || div_gallery.classList.contains('show')){
                    div_gallery.classList.remove('show');
                    left_images.forEach(function(image, index) {setTimeout(function(){image.classList.remove('show')}, 20 + (index * 1));});
                    center_images.forEach(function(image, index) {setTimeout(function(){image.classList.remove('show')}, 10 + (index * 1));});
                    right_images.forEach(function(image, index) {setTimeout(function(){image.classList.remove('show')}, 1 + (index * 1));});
                    div_contact.classList.remove('show');
                    blog_header3.classList.remove('show');
                    blog_header4.classList.remove('show');
                    work_blog_description.classList.remove('show');
                    work_game_content.classList.remove('after');
                    work_project_content.classList.remove('after');
                    contact_description.classList.remove('show');
                    contact_form.classList.remove('show');
                    facebook_div.classList.remove('show');
                    instagram_div.classList.remove('show');
                    twitter_div.classList.remove('show');
                    linkedin_div.classList.remove('show');
                }
            }
        }
        
        function fb_link(){
            window.open('https://www.facebook.com/kalsang.kalsang.737', '_blank');
        }
        function insta_link(){
            window.open('https://www.instagram.com/tttt___kalsang/', '_blank');
        }
        function twt_link(){
            window.open('https://twitter.com/Hilarious_Monke', '_blank');
        }
        function lnk_link(){
            window.open('https://www.linkedin.com/in/tenzin-kalsang-090985285/', '_blank');
        }

function hangman_table_toggle(){
    var work_game_content = document.getElementById('work-game-content');
    var work_project_content = document.getElementById('work-project-content');
    var hangman_game_table = document.getElementById('hangman-game-table');
    var work_rpg_button = document.getElementById('rpg-button');
    var work_titactoe_button = document.getElementById('tictactoe-button');

    if(window.innerWidth <= 800) {
    window.location.href = "hangman-index.html";
}
else{

    if(hangman_game_table.classList.contains('show')){
        work_titactoe_button.classList.remove('hide');
        work_rpg_button.classList.remove('hide');
        setTimeout(function(){work_project_content.classList.remove('collapse')},10);
        setTimeout(function(){work_game_content.classList.remove('focus')},10);
        setTimeout(function(){hangman_game_table.classList.remove('show')},10);
    }
    else{
        work_titactoe_button.classList.add('hide');
        work_rpg_button.classList.add('hide');
        work_game_content.classList.add('focus');
        setTimeout(function(){hangman_game_table.classList.add('show')},100);
        work_project_content.classList.add('collapse');
    }
}
}
function tictactoe_table_toggle(){
    var work_game_content = document.getElementById('work-game-content');
    var work_project_content = document.getElementById('work-project-content');
    var tictactoe_game_table = document.getElementById('tictactoe-game-table');
    var work_hangman_button = document.getElementById('hangman-button');
    var work_rpg_button = document.getElementById('rpg-button');

    if(window.innerWidth <= 800) {
    window.location.href = "TicTacToe.html";
}
else{
    
    if(tictactoe_game_table.classList.contains('show')){
        work_hangman_button.classList.remove('hide');
        work_rpg_button.classList.remove('hide');
        setTimeout(function(){work_project_content.classList.remove('collapse')},10);
        setTimeout(function(){work_game_content.classList.remove('focus')},10);
        setTimeout(function(){tictactoe_game_table.classList.remove('show')},10);
        
    }
    else{
        work_hangman_button.classList.add('hide');
        work_rpg_button.classList.add('hide');
        work_game_content.classList.add('focus');
        setTimeout(function(){tictactoe_game_table.classList.add('show')},100);
        work_project_content.classList.add('collapse');
    }
}
}
function rpg_table_toggle(){
    var work_game_content = document.getElementById('work-game-content');
    var work_project_content = document.getElementById('work-project-content');
    var rpg_game_table = document.getElementById('rpg-game-table');
    var work_hangman_button = document.getElementById('hangman-button');
    var work_tictactoe_button = document.getElementById('tictactoe-button');

if(window.innerWidth <= 800) {
    window.location.href = "rpg-game-index.html";
}
else{

    if(rpg_game_table.classList.contains('show')){
        work_tictactoe_button.classList.remove('hide');
        work_hangman_button.classList.remove('hide');
        setTimeout(function(){work_project_content.classList.remove('collapse')},10);
        setTimeout(function(){work_game_content.classList.remove('focus')},10);
        setTimeout(function(){rpg_game_table.classList.remove('show')},10);
        
    }
    else{
        work_tictactoe_button.classList.add('hide');
        work_hangman_button.classList.add('hide');
        work_game_content.classList.add('focus');
        setTimeout(function(){rpg_game_table.classList.add('show')},100);
        work_project_content.classList.add('collapse');
    }
}
}
