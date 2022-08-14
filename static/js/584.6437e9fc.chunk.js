"use strict";(self.webpackChunktogetrun=self.webpackChunktogetrun||[]).push([[584],{796:function(t,n,e){var r,o,a=e(168),c=(e(2791),e(6031)),s=e(184),i=c.ZP.div(r||(r=(0,a.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 1000;\n"]))),l=c.ZP.div(o||(o=(0,a.Z)(["\n  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 2px,\n    rgba(0, 0, 0, 0.3) 0px 6px 8px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;\n  z-index: 1000;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background: white;\n  padding: 20px;\n  border-radius: 10px;\n  width: 25rem;\n  height: 20rem;\n  img {\n    width: 4rem;\n    margin-bottom: 1rem;\n  }\n  .msg {\n    color: #111;\n    font-size: 16px;\n    margin-bottom: 1rem;\n  }\n  .target {\n    color: black;\n    font-size: 24px;\n    margin-bottom: 1rem;\n  }\n  button {\n    width: 3rem;\n\n    color: white;\n    padding: 10px;\n    margin-left: 4px;\n    border: none;\n    border-radius: 1rem;\n    cursor: pointer;\n    border-radius: 1rem;\n  }\n  .btns {\n    display: flex;\n    align-items: center;\n\n    .true {\n      background: red;\n    }\n    .false {\n      background: green;\n    }\n  }\n"])));n.Z=function(t){var n=t.message,e=t.onComfirm,r=t.target;return(0,s.jsx)(i,{onClick:function(){return e(!1)},children:(0,s.jsxs)(l,{onClick:function(t){return t.stopPropagation()},children:[(0,s.jsx)("h1",{className:"target",children:r}),(0,s.jsx)("h3",{className:"msg",children:n}),(0,s.jsx)("img",{src:"/RunToYou/favicon.ico",alt:"favicon"}),(0,s.jsxs)("div",{className:"btns",children:[(0,s.jsx)("button",{className:"true",onClick:function(){return e(!0)},children:"Yes"}),(0,s.jsx)("button",{className:"false",onClick:function(){return e(!1)},children:"No"})]})]})})}},3969:function(t,n,e){e.d(n,{Z:function(){return P}});var r=e(885),o=e(2791),a=e(177),c=e(8615),s=e(6871),i="writeModal_content__vuRsA",l="writeModal_writeModal__content__764m1",u="writeModal_content__span__cwxyC",d="writeModal_title__7ANi7",m="writeModal_title__span__FMMj3",h="writeModal_title__input__0EfcG",_="writeModal_location__ZTeHl",g="writeModal_location__span__bAC-4",p="writeModal_selectLid__r1hY0",f="writeModal_recruit__RYuR-",x="writeModal_recruit__span__18BTx",v="writeModal_select__recruit__JQ6In",j="writeModal_submit__sodU5",N="writeModal_vaild__7JBml",b="writeModal_validationMessage__qb3wU",k="writeModal_limit__title__6btpH",Z="writeModal_limit__content__1xt+T",C=e(184),w=e(4569),P=function(t){var n=t.open,e=t.close,P=t.locationList,S=t.header,y=t.setPosts,A=t.post,M=(0,o.useState)(""),z=(0,r.Z)(M,2),F=z[0],K=z[1],U=(0,o.useState)(0),I=(0,r.Z)(U,2),R=I[0],D=I[1],L=(0,o.useState)(""),B=(0,r.Z)(L,2),T=B[0],V=B[1],q=(0,o.useState)("recruiting"),E=(0,r.Z)(q,2),W=E[0],Y=E[1],H=(0,s.s0)(),J=(0,o.useState)(!0),G=(0,r.Z)(J,2),O=(G[0],G[1]),X=(0,o.useState)(!0),Q=(0,r.Z)(X,2),$=(Q[0],Q[1]),tt=(0,o.useState)(!0),nt=(0,r.Z)(tt,2),et=(nt[0],nt[1]),rt=(0,o.useState)(""),ot=(0,r.Z)(rt,2),at=ot[0],ct=ot[1];(0,o.useEffect)((function(){"\uae00\uc218\uc815"===S&&(D(A[0].lid),V(A[0].topicContents),K(A[0].topicTitle),Y(A[0].recruit))}),[]);return(0,C.jsx)("div",{className:n?"openModal modal":"modal",children:n?(0,C.jsxs)("section",{children:[(0,C.jsxs)("header",{children:[S,(0,C.jsx)("button",{className:"close",onClick:e,children:"\xd7"})]}),(0,C.jsx)("main",{children:(0,C.jsxs)("form",{children:[(0,C.jsx)("div",{className:N,children:(0,C.jsx)("span",{className:b,children:at})}),(0,C.jsxs)("div",{className:d,children:[(0,C.jsx)("span",{className:m,children:"\uc81c\ubaa9"}),(0,C.jsx)("input",{type:"text",value:F,onChange:function(t){if(30==t.target.value.length)return!1;K(t.target.value)},placeholder:"\uc81c\ubaa9\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694",required:!0,className:h}),(0,C.jsx)("span",{className:k,children:"30\uc790 \uc81c\ud55c"})]}),(0,C.jsxs)("div",{className:_,children:[(0,C.jsx)("span",{className:g,children:"\uc9c0\uc5ed"}),(0,C.jsxs)("select",{className:p,onChange:function(t){D(t.target.value)},value:R,children:[(0,C.jsx)("option",{value:0,children:"\uc9c0\uc5ed\uc744 \uc120\ud0dd\ud574\uc8fc\uc138\uc694"}),P.map((function(t,n){return(0,C.jsx)("option",{value:t.lid,children:t.locationName},n)}))]})]}),"\uae00\uc218\uc815"===S?(0,C.jsxs)("div",{className:f,children:[(0,C.jsx)("span",{className:x,children:"\ubaa8\uc9d1\uc0c1\ud0dc"}),(0,C.jsx)("select",{className:v,onChange:function(t){Y(t.target.value)},value:W,children:["\ubaa8\uc9d1\uc911","\ubaa8\uc9d1\uc644\ub8cc"].map((function(t,n){return(0,C.jsx)("option",{value:"\ubaa8\uc9d1\uc911"===t?"recruiting":"recruited",children:t},n)}))})]}):null,(0,C.jsxs)("div",{className:i,children:[(0,C.jsx)("span",{className:u,children:"\ub0b4\uc6a9"}),(0,C.jsx)("textarea",{placeholder:"\ub0b4\uc6a9\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694",type:"text",className:l,value:T,onChange:function(t){if(300==t.target.value.length)return!1;V(t.target.value)},required:!0}),(0,C.jsx)("span",{className:Z,children:"300\uc790 \uc81c\ud55c"})]}),(0,C.jsx)("button",{className:j,onClick:function(t){return t.preventDefault(),0===F.length?(O(!1),void ct("\uc81c\ubaa9\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694")):0==R?(et(!1),void ct("\uc9c0\uc5ed\uc744 \uc120\ud0dd\ud574\uc8fc\uc138\uc694")):0!==F.length&&129!==R&&0===T.length?($(!1),void ct("\ub0b4\uc6a9\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694")):T.length>300?(et(!1),void ct("\ub0b4\uc6a9\uc740 300\uc790 \uc774\ub0b4\ub85c \uc791\uc131\ud574\uc8fc\uc138\uc694")):F.length>30?(et(!1),void ct("\uc81c\ubaa9\uc740 30\uc790 \uc774\ub0b4\ub85c \uc791\uc131\ud574\uc8fc\uc138\uc694")):("\uae00\uc4f0\uae30"===S&&w.post("https://saessac.kro.kr:80/topic/insert",{topictitle:F,topiccontents:T,location_lid:R,type:"friend"},{headers:{Authorization:(0,c.Km)()}}).then((function(t){(0,a.Jq)().then((function(t){y(t.reverse()),e(),K(""),D(0),V(""),ct("")})).catch((function(t){return console.log("error",t)}))})).catch((function(t){console.log("\uc804\uc1a1 \uc2e4\ud328")})),void("\uae00\uc218\uc815"===S&&w.put("https://saessac.kro.kr:80/topic/".concat(A[0].tid),{topictitle:F,topiccontents:T,recruit:W,location_lid:R},{headers:{Authorization:(0,c.Km)()}}).then((function(){ct(""),e(),H("/mainpage")})).catch((function(t){console.log("\uae00\uc218\uc815 \uc5d0\ub7ec")}))))},children:"\uc804\uc1a1"})]})}),(0,C.jsx)("footer",{children:(0,C.jsx)("button",{type:"submit",className:"close",onClick:e,children:"close"})})]}):null})}},7605:function(t,n,e){var r,o,a=e(168),c=e(6031),s=e(184);var i=c.ZP.nav(r||(r=(0,a.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  margin: 16px;\n"]))),l=c.ZP.button(o||(o=(0,a.Z)(["\n  border: none;\n  border-radius: 8px;\n  padding: 8px;\n  margin: 0;\n  background: black;\n  color: white;\n  font-size: 1rem;\n\n  &:hover {\n    background: #b5876d;\n    cursor: pointer;\n    transform: translateY(-2px);\n  }\n\n  &[disabled] {\n    background: grey;\n    cursor: revert;\n    transform: revert;\n  }\n\n  &[aria-current] {\n    background: #ff914d;\n    font-weight: bold;\n    cursor: revert;\n    transform: revert;\n  }\n"])));n.Z=function(t){var n=t.total,e=t.limit,r=t.page,o=t.setPage;0===n&&(n=1);var a=Math.ceil(n/e);return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(i,{children:[(0,s.jsx)(l,{onClick:function(){return o(r-1)},disabled:1===r,children:"<"}),Array(a).fill().map((function(t,n){return(0,s.jsx)(l,{onClick:function(){return o(n+1)},"aria-current":r===n+1?"page":null,children:n+1},n+1)})),(0,s.jsx)(l,{onClick:function(){return o(r+1)},disabled:r===a,children:">"})]})})}},6860:function(t,n,e){e.d(n,{Z:function(){return x}});var r=e(4165),o=e(5861),a=e(885),c=e(2791),s=e(3504),i=e(2061),l=e(6005),u="navbar_navbar__TdqIH",d="navbar_navLink__pmTlF",m=e(184),h=function(){var t=(0,l.FV)(i.rE),n=(0,a.Z)(t,2),e=n[0];n[1];return(0,m.jsxs)("nav",{className:u,children:[!e&&(0,m.jsx)(s.rU,{className:d,to:"/",children:(0,m.jsx)("span",{children:"Intro"})}),(0,m.jsx)(s.rU,{className:d,to:"/mainpage",children:(0,m.jsx)("span",{children:"Main Page"})}),(0,m.jsx)(s.rU,{className:d,to:"/recommended",children:(0,m.jsx)("span",{children:"hotPlace"})}),e&&(0,m.jsx)(s.rU,{className:d,to:"/mypage",children:(0,m.jsx)("span",{children:"myPage"})})]})},_=e(6871),g=e(8615),p={Rtygrey:"undefined",RtyBrown:"#B5876D",RtyBlack:"black",RtyIvory:"#FFF7F1",RtyRed:"red",dimBlack:"rgba(0, 0, 0, 0.4)",RtyPurple:"#8B3A8C",RtyOrange:"#ff914d",dimWhite:"rgba(245, 245, 245, 0.3)",RtyWhite:"white",RtyGrey:"#DFE0DF",fontLarge:"48px",fontMedium:"36px",fontSmall:"24px",header:"header_header__z8ezc",avata:"header_avata__spVXK",logo:"header_logo__wLirW",nickname:"header_nickname__5mxBh",btnContainer:"header_btnContainer__3kiPK",button:"header_button__J4OfG"},f=e(796),x=function(){var t=(0,_.s0)(),n=(0,l.FV)(i.rE),e=(0,a.Z)(n,2),u=e[0],d=e[1],x=(0,l.FV)(i.od),v=(0,a.Z)(x,2),j=v[0],N=(v[1],(0,l.FV)(i.Dc)),b=(0,a.Z)(N,2),k=b[0],Z=(b[1],(0,c.useState)(!1)),C=(0,a.Z)(Z,2),w=C[0],P=C[1],S=function(){P(!w)},y=function(){var n=(0,o.Z)((0,r.Z)().mark((function n(){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:(0,g.kT)(),d(!1),t("/");case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return(0,m.jsxs)("header",{className:p.header,children:[w&&(0,m.jsx)(f.Z,{message:"\ub85c\uadf8\uc544\uc6c3 \ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",onComfirm:function(t){t?(S(),y()):S()},target:k}),(0,m.jsx)(s.rU,{to:"/mainpage",children:(0,m.jsx)("img",{src:"/RunToYou/img/logo1.png",alt:"logo img",className:p.logo})}),(0,m.jsx)(h,{}),u?(0,m.jsxs)("div",{className:p.btnContainer,children:[(0,m.jsx)("div",{className:p.avataWrapper,children:(0,m.jsx)("div",{className:p.avataCentered,children:(0,m.jsx)("img",{src:"https://saessac.kro.kr:80/".concat(j),alt:"profile img",className:p.avata})})}),(0,m.jsx)("p",{className:p.nickname,children:k}),(0,m.jsx)("button",{className:p.button,onClick:S,children:"\ub85c\uadf8\uc544\uc6c3"})]}):(0,m.jsxs)("div",{className:p.btnContainer,children:[(0,m.jsx)(s.rU,{to:"/signup",children:(0,m.jsx)("button",{className:p.button,children:"\uac00\uc785\ud558\uae30"})}),(0,m.jsx)(s.rU,{to:"/login",children:(0,m.jsx)("button",{className:p.button,children:"\ub85c\uadf8\uc778"})})]})]})}},177:function(t,n,e){e.d(n,{Ai:function(){return u},BW:function(){return g},IU:function(){return i},Jq:function(){return j},Kn:function(){return _},Rf:function(){return d},U5:function(){return f},_7:function(){return m},hr:function(){return s},jC:function(){return h},pW:function(){return x},qU:function(){return p},tm:function(){return v},x4:function(){return l}});var r=e(4569),o=e.n(r),a=e(8615),c="https://saessac.kro.kr:80",s=function(t){var n={method:"get",url:"https://saessac.kro.kr:80/user/checkid?userid=".concat(t," "),headers:{}};return o()(n).then((function(t){return t.data.msg})).then((function(t){return console.log(t)})).catch((function(t){return console.log("signUp error",t)}))},i=function(t,n){var e={method:"post",url:"".concat(c,"/user/insert"),data:{userid:t,userpassword:n}};return o()(e).then((function(t){return t.data.msg})).catch((function(t){return console.log("signUp error",t)}))},l=function(t,n){var e={method:"post",url:"".concat(c,"/user/login"),data:{userid:t,userpassword:n}};return o()(e).then((function(t){return t.data})).catch((function(t){return console.log("login error",t)}))},u=function(){var t={method:"get",url:"".concat(c,"/user"),headers:{Authorization:(0,a.Km)()}};return o()(t).then((function(t){if(t.data.msg)return t.data.data})).catch((function(t){return console.log("getProfile error",t)}))},d=function(){var t={method:"get",url:"".concat(c,"/user/list"),headers:{}};return o()(t).then((function(t){return t.data})).catch((function(t){return console.log("getUsers error",t)}))},m=function(){var t={method:"get",url:"".concat(c,"/location/list"),headers:{}};return o()(t).then((function(t){return t.data})).catch((function(t){console.log("getPlace error",t)}))},h=function(){var t={method:"put",url:"".concat(c,"/user/picture"),headers:{Authorization:(0,a.Km)()},data:{}};return o()(t).catch((function(t){return console.log("deletImg error",t)}))},_=function(t){var n={method:"post",url:"".concat(c,"/user/picture"),headers:{Authorization:(0,a.Km)(),"Content-Type":"multipart/form-data"},data:{profileImg:t}};return o()(n).catch((function(t){return console.log("addImg error",t)}))},g=function(t){var n={method:"delete",url:"".concat(c,"/favoritlocation?lid=").concat(t),headers:{Authorization:(0,a.Km)()}};return o()(n).catch((function(t){return console.log("deletePlace error",t)}))},p=function(t,n){var e={method:"put",url:"".concat(c,"/user"),headers:{Authorization:(0,a.Km)()},data:{nickname:t,info:n}};return o()(e).catch((function(t){return console.log("addProfile error",t)}))},f=function(t,n){var e={method:"put",url:"".concat(c,"/user/password"),headers:{Authorization:(0,a.Km)()},data:{currentuserpassword:t,userpassword:n}};return o()(e).then((function(t){return t.data.msg})).catch((function(t){return console.log("updatePW error",t)}))},x=function(t){var n={method:"post",url:"".concat(c,"/favoritlocation/insert"),headers:{Authorization:(0,a.Km)()},data:{locationid:t}};return o()(n).then((function(t){return console.log("addPlace success",t.data)})).catch((function(t){return console.log("addPlace error",t)}))},v=function(){var t={method:"delete",url:"".concat(c,"/user"),headers:{Authorization:(0,a.Km)()}};return o()(t).then((function(t){return console.log("deleteAccount success",t)})).catch((function(t){return console.log("deleteAccount error",t)}))},j=function(){var t={method:"get",url:"".concat(c,"/topic/list"),headers:{}};return o()(t).then((function(t){return t.data})).catch((function(t){console.log("getPlace error",t)}))}},8584:function(t,n,e){e.r(n),e.d(n,{default:function(){return q}});var r=e(885),o=e(2791),a=e(6871),c=e(177),s=e(8615),i=e(3969),l=e(6005),u=e(2061),d=e(4569),m=e.n(d),h={comment:"comment_comment__sPnWO",comment_image_container:"comment_comment_image_container__Yi7ex",comment_right_part:"comment_comment_right_part__HWQz0",comment_author:"comment_comment_author__RLgbz",created_at:"comment_created_at__hxJNN",comment_text:"comment_comment_text__BaAgr",comment_action:"comment_comment_action__aMesc"},_=e(796),g=e(184),p="https://saessac.kro.kr:80/",f=function(t){var n=t.tcid,e=t.createdAt,a=t.nickname,c=t.userID,i=t.userPicture,d=t.topicComment,f=t.getComments,x=(0,l.FV)(u.KL),v=(0,r.Z)(x,2),j=v[0],N=(v[1],(0,o.useState)(!1)),b=(0,r.Z)(N,2),k=b[0],Z=b[1],C=new Date(e),w=String(C.getHours()).padStart(2,"0"),P=String(C.getMinutes()).padStart(2,"0"),S="".concat(C.toLocaleDateString()," ").concat(w,":").concat(P);var y=function(){Z(!k)};return(0,g.jsxs)("div",{className:h.comment,children:[k&&(0,g.jsx)(_.Z,{message:"\ub313\uae00\uc744 \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",onComfirm:function(t){t?(m().delete("".concat(p,"topiccomments/").concat(n),{headers:{Authorization:(0,s.Km)()}}).then((function(){f()})).catch((function(t){console.log("deleteComment err",t)})),y()):y()}}),(0,g.jsx)("div",{className:h.comment_image_container,children:(0,g.jsx)("img",{src:"".concat(p).concat(i),alt:"user-picture"})}),(0,g.jsx)("div",{className:h.comment_right_part,children:(0,g.jsxs)("div",{className:h.comment_content,children:[(0,g.jsx)("div",{className:h.comment_author,children:a}),(0,g.jsx)("div",{className:h.created_at,children:S}),(0,g.jsx)("div",{className:h.comment_text,children:d}),(0,g.jsx)("div",{className:h.comment_actions,children:j.userID===c&&(0,g.jsx)("div",{className:h.comment_action,onClick:y,children:"\uc0ad\uc81c\ud558\uae30"})})]})})]},n)},x="commentForm_comment_form_textarea__TYoAz",v="commentForm_button_N_max_length__mDjwZ",j="commentForm_comment_form_button__Y9XHK",N="commentForm_max_length__VfM1o",b=function(t){var n=t.topicId,e=t.getComments,a=(0,o.useState)(""),c=(0,r.Z)(a,2),i=c[0],d=c[1],h=0===i.length,_=(0,l.FV)(u.rE),p=(0,r.Z)(_,2),f=p[0],b=(p[1],1e3),k=function(t){t.preventDefault(),function(t,n){var r={topic_tid:t,topiccomment:n};m().post("".concat("https://saessac.kro.kr:80/","topiccomments/insert"),r,{headers:{Authorization:(0,s.Km)()}}).then((function(t){e()})).catch((function(t){console.log("postComment err",t)}))}(n,i),d("")};return(0,g.jsx)("div",{className:"comment_container",children:(0,g.jsxs)("form",{onSubmit:k,children:[(0,g.jsx)("textarea",{className:x,maxLength:b,placeholder:f?"\ub313\uae00\uc744 \uc791\uc131\ud574\uc8fc\uc138\uc694":"\ub85c\uadf8\uc778 \ud6c4 \ub313\uae00 \uc791\uc131\ud574\uc8fc\uc138\uc694",value:i,onChange:function(t){var n;d(t.target.value),(n=t.target.value).length>b&&d(n.slice(0,b))}}),(0,g.jsxs)("div",{className:v,children:[(0,g.jsx)("button",{className:j,onClick:k,disabled:h||!f,children:"\uc791\uc131"}),(0,g.jsx)("div",{className:N,children:"( ".concat(i.length.toLocaleString()," / ").concat(b.toLocaleString()," )")})]})]})})},k=e(7605),Z="comments_comments_container__5LIYh",C="comments_comments_area__9sFnt",w="comments_comments_list__GcR9-",P="comments_comments_counter__UaxB8",S=function(t){var n=t.id,e=(0,o.useState)([]),a=(0,r.Z)(e,2),c=a[0],i=a[1],d=(0,l.FV)(u.rE),h=(0,r.Z)(d,2),_=h[0],p=(h[1],(0,o.useState)(1)),x=(0,r.Z)(p,2),v=x[0],j=x[1],N=10*(v-1),S=c.length;(0,o.useEffect)((function(){y()}),[]);var y=function(){return m().get("".concat("https://saessac.kro.kr:80/","topiccomments/").concat(n,"?sort=desc"),{headers:{Authorization:(0,s.Km)()}}).then((function(t){i(t.data)})).catch((function(t){console.log("getComments err",t)}))};return(0,g.jsxs)("div",{className:Z,children:[(0,g.jsxs)("div",{className:C,children:[(0,g.jsx)("div",{className:P,children:"\ub313\uae00 ".concat(c.length)}),(0,g.jsx)(b,{topicId:n,getComments:y}),_?(0,g.jsx)("div",{className:w,children:0!==c.length&&c.slice(N,N+10).map((function(t){return(0,g.jsx)(f,{tcid:t.tcid,createdAt:t.created_at,nickname:t.nickname,userID:t.userID,userPicture:t.userPicture,topicComment:t.topicComent,getComments:y},t.tcid)}))}):(0,g.jsx)("div",{className:Z,children:"\ub85c\uadf8\uc778 \ud6c4 \ub313\uae00 \uc5f4\ub78c \uac00\ub2a5\ud569\ub2c8\ub2e4"})]}),(0,g.jsx)(k.Z,{total:S,limit:10,page:v,setPage:j})]})},y=e(6860),A="postPage_post_page_container__fLpC5",M="postPage_post_page_wrapper__tS96q",z="postPage_post_page_contents__1ZXlz",F="postPage_post_page_title__xZiAA",K="postPage_user_info__A5RBE",U="postPage_user_profile__IkZdq",I="postPage_user_id__1stpH",R="postPage_created_at__HKeWF",D="postPage_post_page_main_text__+Gmqv",L="postPage_button_container__wUIyN",B="postPage_button_delete__cUbkT",T="postPage_button_edit__B6U9P",V=e(4569),q=function(){var t=(0,a.UO)().id,n=(0,o.useState)({}),e=(0,r.Z)(n,2),d=e[0],m=e[1],h=(0,o.useState)(!0),p=(0,r.Z)(h,2),f=p[0],x=p[1],v=(0,o.useState)(!1),j=(0,r.Z)(v,2),N=j[0],b=j[1],k=(0,l.FV)(u.jk),Z=(0,r.Z)(k,2),C=(Z[0],Z[1]),w=(0,l.FV)(u.Ln),P=(0,r.Z)(w,2),q=P[0],E=(P[1],(0,o.useState)(!1)),W=(0,r.Z)(E,2),Y=W[0],H=W[1],J=(0,l.FV)(u.pz),G=(0,r.Z)(J,2),O=G[0],X=(G[1],(0,l.FV)(u.rE)),Q=(0,r.Z)(X,2),$=Q[0],tt=(Q[1],(0,a.s0)());(0,o.useEffect)((function(){V.get("https://saessac.kro.kr:80/topic/".concat(t)).then((function(t){m(t.data),x(!f)})).catch((function(t){return console.log("error",t)}))}),[]);var nt=function(){H(!Y)},et=function(){V.delete("https://saessac.kro.kr:80/topic/".concat(t),{headers:{Authorization:(0,s.Km)()}}).then((function(){(0,c.Jq)().then((function(t){C(t)})).then((function(){console.log("\uc0ad\uc81c \uc644\ub8cc"),tt("/mainpage")}))})).catch((function(t){return console.log("error",t)}))};return(0,g.jsxs)("div",{className:A,children:[Y&&(0,g.jsx)(_.Z,{message:"\uc0ad\uc81c \ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",onComfirm:function(t){t?(nt(),et()):nt()}}),(0,g.jsx)(y.Z,{}),f?null:(0,g.jsx)("div",{className:M,children:(0,g.jsxs)("div",{className:z,children:[(0,g.jsx)("h1",{className:F,children:d[0].topicTitle}),(0,g.jsxs)("div",{className:K,children:[(0,g.jsx)("img",{src:"https://saessac.kro.kr:80/".concat(d[0].userPicture)}),(0,g.jsxs)("div",{className:U,children:[(0,g.jsx)("div",{className:I,children:d[0].nickName})," ",(0,g.jsx)("div",{className:R,children:function(t){var n=new Date(t),e=String(n.getHours()).padStart(2,"0"),r=String(n.getMinutes()).padStart(2,"0");return"".concat(n.toLocaleDateString()," ").concat(e,":").concat(r)}(d[0].created_at)})]}),(0,g.jsxs)("div",{className:L,children:[O===d[0].userID&&$?(0,g.jsx)("button",{className:B,onClick:nt,children:"\uc0ad\uc81c"}):null,O===d[0].userID&&$?(0,g.jsx)("button",{className:T,onClick:function(){b(!0)},children:"\uc218\uc815"}):null]})]}),(0,g.jsx)("div",{className:D,children:d[0].topicContents}),(0,g.jsx)(i.Z,{open:N,close:function(){b(!1)},header:"\uae00\uc218\uc815",setPosts:C,post:d,locationList:q})]})}),(0,g.jsx)(S,{id:t})]})}}}]);
//# sourceMappingURL=584.6437e9fc.chunk.js.map