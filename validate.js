$.fn.required = function(){
    //▼入力必須
    $(this).focusout(function() {
        if ($(this).siblings(".error").size() == 0) {
                //エラー表示が無い場合の処理
                    if ($(this).val() == "") {
                        $(this).parent().prepend("<p class='error'>入力必須項目です。</p>");
                        $(this).siblings(".error").show("slow");
                    }
        } else {
                //エラー表示が有る場合の処理
                    if ($(this).val() !== "") {
                        $(this).siblings(".error").hide("slow", function() {
                            $(this).remove();
                        });
                    }
        }
    });
    //▲入力必須
    return this;
}

$.fn.requiredMulti = function(){
    //▼複数入力必須
    $(this).focusout(function() {
        var i = 0;
        $("input", this).each(function(){
        //エラー表示が有る場合の処理
            if ($(this).val() == "") {
                i--;
            } else if($(this).val() !== "") {
                i++;
            }
        })
        //iに入力必須項目数を設定
        if(i == 2){
            console.log ("ok");
            $(this).children(".error").hide("slow", function() {
                $(this).remove();
            });
        } else {
            if ($(this).children(".error").size() == 0) {
                $(this).prepend("<p class='error'>入力必須項目です。</p>");
                $(this).children(".error").show("slow");
            }
        }
    });
    //▲複数入力必須
    return this;
}

$.fn.requiredCkBx = function(){
    //▼チェックボックス選択必須
    $(this).change(function() {
        //ひとつ以上入力されているか
            if ($(":checkbox:checked", this).size() == 0) {
                $(this).prepend("<p class='error'>選択必須項目です。</p>");
                $(this).children(".error").show("slow");
            } else {
                $(this).children(".error").hide("slow", function() {　　
                    $(this).remove();
                });
            }
    });
    //▲チェックボックス選択必須
    return this;
}

$.fn.mailCk = function(){
    //▼メールアドレス入力内容
    $(this).focusout(function() {
        if ($(this).siblings(".error02").size() == 0) {
                    if ($(this).val() && !$(this).val().match(/^[a-zA-Z0-9_\.\-]+?@[A-Za-z0-9_\.\-]+$/)) {
                        $(this).parent().prepend("<p class='error02'>メールアドレスの形式が誤っています。</p>");
                        $(this).siblings(".error02").show("slow");
                        }

        } else {
                //メールアドレス
                    if (!$(this).val()||$(this).val().match(/^[a-zA-Z0-9_\.\-]+?@[A-Za-z0-9_\.\-]+$/)) {
                         $(this).siblings(".error02").hide("slow", function() {　　
                            $(this).remove();
                        });
                     }
        }
    });
    //▲メールアドレス入力内容
    return this;
}

$.fn.mailCkRe = function(){
    //▼メールアドレス確認チェック　name属性の値を取得し、取得した値から「_check」を取り除いたname属性を持つ要素が照合先
    $(this).focusout(function() {
        if ($(this).siblings(".error03").size() == 0) {
            if($(this).val() && $(this).val()!=$("input[name="+$(this).attr("name").replace(/^(.+)_check$/, "$1")+"]").val()){
                $(this).parent().prepend("<p class='error03'>メールアドレスと内容が異なります</p>");
                $(this).siblings(".error03").show("slow");
            }
        } else {
                //メールアドレス
                    if (!$(this).val()||$(this).val() == $("input[name="+$(this).attr("name").replace(/^(.+)_check$/, "$1")+"]").val()){
                        $(this).siblings(".error03").hide("slow", function() {
                            $(this).remove();
                        });
                    }
        }
    });
    return this;
}

$.fn.tellCk = function(){
    //▼電話番号入力内容
    $(this).focusout(function() {
        if ($(this).siblings(".error02").size() == 0) {
            if ($(this).val() && !$(this).val().match(/^[0-9０-９|-]+$/)) {
                $(this).parent().prepend("<p class='error02'>電話番号の形式が誤っています。</p>");
                $(this).siblings(".error02").show("slow");
            }
        } else {
            if (!$(this).val() || $(this).val().match(/^[0-9０-９|-]+$/)) {
                $(this).siblings(".error02").hide("slow", function() {
                $(this).remove();
                });
            }
        }
    });
    //▲電話番号入力内容
    return this;
}