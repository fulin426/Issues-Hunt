(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{158:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),r=a(13),c=a.n(r),l=a(56),i=a(57),u=a(63),o=a(58),m=a(64),d=a(32),h=a.n(d),p=(a(89),a(33)),g=a.n(p),f=a(34),v=a.n(f),E=function(){return n.a.createElement(v.a,{bg:"dark",variant:"dark"},n.a.createElement(v.a.Brand,{href:"#home"},"Issues Hunt"))},b=function(){return n.a.createElement("div",{className:"description"},n.a.createElement("div",{className:"description-wrapper"},n.a.createElement("p",null,"Issues are used to keep track of tasks, bugs, and feature enhancments for your projects.")))},N=a(31),k=a.n(N),y=a(59),S=a.n(y),P=a(30),w=a.n(P),L=a(35),B=a.n(L),I=function(e){var t=e.searchIssues,a=e.input,s=e.searchInput;return n.a.createElement(S.a,{className:"SearchBar",onSubmit:t},n.a.createElement(B.a,null,n.a.createElement(w.a,{value:a,onChange:s,placeholder:"Search all issues..","aria-label":"Search Input","aria-describedby":"basic-addon2"}),n.a.createElement(B.a.Append,null,n.a.createElement(k.a,{className:"search-button",onClick:t},"Search"))))},C=function(e){var t=e.clearSearchbar;return n.a.createElement("div",{className:"clear-query-container"},n.a.createElement("div",{className:"query-item",onClick:t},"Clear search query and filters ",n.a.createElement("i",{className:"far fa-times-circle"})))},x=a(24),D=a.n(x),O=a(14),A=a.n(O),R=a(18),H=a.n(R),_=function(e){var t=e.passID,a=e.currentLabel,s=e.searchedLabel;return'"'.concat(a,'"')===s?n.a.createElement("div",{"data-id":t},n.a.createElement("i",{className:"fas fa-check"})):n.a.createElement("div",{"data-id":t,className:"icon-box"})},F=function(e){var t=e.searchByLabel,a=e.searchedLabel,s=[["good+first+issue","Good First Issue"],["help+wanted","Help Wanted"],["discussion","Discussion"],["bug","Bug"],["hacktoberfest","Hacktoberfest"]].map(function(e){return n.a.createElement(A.a.Item,{key:e[0],as:"button","data-id":e[0],onClick:t},n.a.createElement("div",{className:"checkmark-list-wrapper"},n.a.createElement("div",{className:"checkmark-wrapper"},n.a.createElement(_,{passID:e[0],searchedLabel:a,currentLabel:e[0]})),n.a.createElement("div",{"data-id":e[0],className:"dropdown-text-wrapper"},e[1])))});return n.a.createElement(H.a,{id:"LabelDropdown",title:"Label",className:"DropdownButton"},s)},j=function(e){var t=e.currentLanguage,a=e.searchedLanguaged,s=e.passID;return t===a?n.a.createElement("div",{"data-id":s},n.a.createElement("i",{className:"fas fa-check"})):n.a.createElement("div",{"data-id":s,className:"icon-box"})},M=function(e){var t=e.searchByLanguage,a=e.searchedLanguaged,s=["JavaScript","Python","Java","HTML","CSS","Ruby","C#","PHP","C++"].map(function(e){return n.a.createElement(A.a.Item,{key:e,"data-id":e,onClick:t},n.a.createElement("div",{className:"checkmark-list-wrapper"},n.a.createElement("div",{className:"checkmark-wrapper"},n.a.createElement(j,{passID:e,searchedLanguaged:a,currentLanguage:e})),n.a.createElement("div",{"data-id":e,className:"dropdown-text-wrapper"},e)))});return n.a.createElement(H.a,{id:"LanguageDropdown",title:"Language",className:"DropdownButton"},s)},W=function(e){var t=e.searchedSort,a=e.currentSortOption,s=e.passID;return t===a?n.a.createElement("div",{"data-id":s},n.a.createElement("i",{className:"fas fa-check"})):n.a.createElement("div",{"data-id":s,className:"icon-box"})},q=function(e){var t=e.searchBySort,a=e.currentSortOption,s=[["","Best Match (default)"],["&sort=created&order=desc","Newest"],["&sort=created&order=asc","Oldest"],["&sort=comments&order=desc","Most Comments"],["&sort=comments&order=asc","Least Comments"],["&sort=Updated&order=desc","Recently Updated"]].map(function(e){return n.a.createElement(A.a.Item,{key:e,"data-id":e[0],onClick:t},n.a.createElement("div",{className:"checkmark-list-wrapper"},n.a.createElement("div",{className:"checkmark-wrapper"},n.a.createElement(W,{passID:e[0],searchedSort:e[0],currentSortOption:a})),n.a.createElement("div",{"data-id":e[0],className:"dropdown-text-wrapper"},e[1])))});return n.a.createElement(H.a,{id:"Dropdownsort",title:"Sort",className:"DropdownButton"},s)},J=function(e){var t=e.totalCount,a=e.searchedLabel,s=e.searchByLabel,r=e.searchedLanguaged,c=e.searchByLanguage,l=e.searchBySort,i=e.currentSortOption;return n.a.createElement(D.a,{className:"ResultsHeader"},n.a.createElement("div",{className:"open-issues"},n.a.createElement("i",{className:"fas fa-exclamation-circle"})," ",t," Open"),n.a.createElement(q,{searchBySort:l,currentSortOption:i}),n.a.createElement(F,{searchedLabel:a,searchByLabel:s}),n.a.createElement(M,{searchedLanguaged:r,searchByLanguage:c}))},T=function(e){var t=e.labels.map(function(e){return n.a.createElement("div",{key:e.id,style:{backgroundColor:"#"+e.color},className:"issue-label"},e.name)});return n.a.createElement("div",{className:"issues-label-container"},t)},G=function(e){var t=e.issuesReturn.items.map(function(e){return n.a.createElement(D.a,{key:e.id},n.a.createElement("div",{className:"issues-container"},n.a.createElement("div",{className:"exclamation"},n.a.createElement("i",{className:"fas fa-exclamation-circle fa-lg"})),n.a.createElement("div",{className:"title-description-container"},n.a.createElement("div",{className:"issues-label-wrapper"},n.a.createElement("p",{className:"issues-title"},n.a.createElement("span",{className:"issues-github-link"}),n.a.createElement("a",{href:e.html_url},e.title)),n.a.createElement(T,{labels:e.labels})),n.a.createElement("div",{className:"issues-body"},n.a.createElement("p",{className:"issues-body-text"},e.body,"...")),n.a.createElement("p",{className:"issues-description"},"#",e.number," opened on ",function(e){var t=new Date(e).toString(),a=t.slice(4,10),s=t.slice(11,15);return"".concat(a,", ").concat(s)}(e.created_at)," by ",n.a.createElement("a",{href:e.user.html_url},e.user.login))),n.a.createElement("div",{className:"comments"},n.a.createElement("a",{className:"comments-link",href:e.html_url},n.a.createElement("i",{className:"far fa-comment-alt"})," ",e.comments))))});return n.a.createElement("div",{className:"results-list"},t)},Q=function(){return n.a.createElement("div",{className:"blank-container"},n.a.createElement("div",{className:"error-handle-wrapper"},n.a.createElement("i",{className:"fas fa-exclamation-circle fa-2x"}),n.a.createElement("div",{className:"no-results-found"},n.a.createElement("h5",null,"Welcome to Issues Hunt"),n.a.createElement("p",null,"Issues Hunt can help potential first-time GitHub contributors discover issues. To get started, try searching for issues labeled with ",n.a.createElement("span",{className:"issue-label help-wanted"},"help wanted")," or ",n.a.createElement("span",{className:"issue-label good-first-issue"},"good first issue")))))},U=function(){return n.a.createElement("div",{className:"blank-container"},n.a.createElement("div",{className:"error-handle-wrapper"},n.a.createElement("i",{className:"fas fa-exclamation-circle fa-2x"}),n.a.createElement("div",{className:"no-results-found"},n.a.createElement("h5",null,"No Results found"),n.a.createElement("h5",null,"Please try a different search parameter"))))},z=function(e){var t=e.currentPage,a=e.selectedPage,s=e.selectPageNumber;return t===a?n.a.createElement("button",{"data-id":t,className:"selected-page individual-number",onClick:s},t):n.a.createElement("button",{"data-id":t,className:"individual-number",onClick:s},t)},K=function(e){var t,a=e.firstPage,s=e.lastPage,r=e.selectedPage,c=e.nextButton,l=e.previousButton,i=e.selectPageNumber;1<=r<=5&&(t=[a,a+1,a+2,a+3,a+4,"...",s]),r>5&&r<=s-5&&(t=[a,"..",r-1,r,r+1,"...",s]),r>=s-4&&r<=s&&(t=[a,"...",s-4,s-3,s-2,s-1,s]);var u=t.map(function(e){return n.a.createElement(z,{key:e,currentPage:e,selectedPage:r,selectPageNumber:i})});return n.a.createElement("div",{className:"widget-container"},n.a.createElement("button",{className:"previous-button",onClick:l},"Previous"),u,n.a.createElement("button",{className:"next-button",onClick:c},"Next"))},V=function(){return n.a.createElement("div",{className:"footer"})},X=a(62),Y=a.n(X),Z=function(){return n.a.createElement("div",{className:"blank-container"},n.a.createElement("div",{className:"spinner-container"},n.a.createElement(Y.a,{type:"TailSpin",color:"#00BFFF",height:"75",width:"75"})))},$=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(o.a)(t).call(this,e))).state={issues:"",issuesCount:"0",returnedAPI:"no",spinner:"hide",errorMessage:"",input:"",language:"",label:"",sortOption:"",pageLink:"",firstPage:1,lastPage:15,selectedPage:1},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"showSpinner",value:function(){this.setState({returnedAPI:"pending",spinner:"show"})}},{key:"callAPI",value:function(){var e,t,a,s=this,n=this.state.input;e=""===this.state.label?"":"+label:".concat(this.state.label),t=""===this.state.language?"":"+language:".concat(this.state.language),a=""===this.state.sortOption?"":a=this.state.sortOption,h.a.get("https://api.github.com/search/issues?q=".concat(n,"+state:open").concat(e).concat(t,"&client_id=").concat(g.a.clientID,"&client_secret=").concat(g.a.clientSecret).concat(a,"&per_page=25")).then(function(e){var t,a;console.log(e.headers);var n=0;if("0"!==e.data.total_count.toLocaleString()&&!0===e.headers.link){a=(t=e.headers.link.split(";"))[0].slice(1,t[0].length-2);var r=(n=t[1].split("=")).length-1;n=n[r].slice(0,n[r].length-1)}s.setState({issues:e.data,issuesCount:e.data.total_count.toLocaleString(),returnedAPI:"yes",spinner:"hide",lastPage:parseInt(n),pageLink:a})},function(e){console.log(e.message),s.setState({errorMessage:e.message})})}},{key:"searchInput",value:function(e){this.setState({input:e.target.value})}},{key:"searchByLabel",value:function(e){var t=this;"show"!==this.state.spinner&&this.setState({label:'"'.concat(e.target.dataset.id,'"'),selectedPage:1},function(){return t.searchNormal()})}},{key:"searchByLanguage",value:function(e){var t=this;"show"!==this.state.spinner?this.setState({language:e.target.dataset.id,selectedPage:1},function(){return t.searchNormal()}):console.log("clicked")}},{key:"searchBySort",value:function(e){var t=this;"show"!==this.state.spinner&&this.setState({sortOption:e.target.dataset.id,selectedPage:1},function(){return t.searchNormal()})}},{key:"clearSearchbar",value:function(){var e=this;this.setState({issues:"",issuesCount:"0",input:"",language:"",label:"",sortOption:""},function(){return e.ResultsListRender()})}},{key:"searchNormal",value:function(){this.showSpinner(),this.callAPI()}},{key:"search",value:function(e){var t=this;e.preventDefault(),this.showSpinner(),this.setState({issues:"",issuesCount:"0",language:"",label:"",sortOption:""},function(){return t.callAPI()})}},{key:"ResultsListRender",value:function(){var e=this;return"yes"===this.state.returnedAPI&&""!==this.state.issues&&"0"!==this.state.issuesCount?n.a.createElement("div",null,n.a.createElement(G,{issuesReturn:this.state.issues}),n.a.createElement(K,{selectPageNumber:function(t){return e.selectPageNumber(t)},nextButton:function(t){return e.nextButton(t)},previousButton:function(t){return e.previousButton(t)},firstPage:this.state.firstPage,lastPage:this.state.lastPage,selectedPage:this.state.selectedPage})):"show"===this.state.spinner&&"yes"!==this.state.returnedAPI?n.a.createElement(Z,null):"0"===this.state.issuesCount&&""!==this.state.issues?n.a.createElement(U,null):(this.state.issues,n.a.createElement(Q,null))}},{key:"QueryRender",value:function(){var e=this;return""!==this.state.input||""!==this.state.language||""!==this.state.label||""!==this.state.issues?n.a.createElement(C,{clearSearchbar:function(t){return e.clearSearchbar(t)}}):null}},{key:"previousButton",value:function(e){var t=this;e.preventDefault(),1!==this.state.selectedPage&&(this.showSpinner(),this.setState({selectedPage:this.state.selectedPage-1},function(){return t.callApiFromWidget()}))}},{key:"nextButton",value:function(e){var t=this;e.preventDefault(),this.state.selectedPage<this.state.lastPage?(this.showSpinner(),this.setState({selectedPage:this.state.selectedPage+1},function(){return t.callApiFromWidget()})):this.setState({selectedPage:this.state.selectedPage})}},{key:"callApiFromWidget",value:function(){var e=this;h.a.get("".concat(this.state.pageLink).concat(this.state.selectedPage)).then(function(t){console.log(t.data),console.log(t.headers),e.setState({issues:t.data,returnedAPI:"yes",spinner:"hide"})},function(t){console.log(t.message),e.setState({errorMessage:t.message})})}},{key:"selectPageNumber",value:function(e){var t=this;e.preventDefault();var a=parseInt(e.target.dataset.id);isNaN(a)||(this.showSpinner(),this.setState({selectedPage:a},function(){return t.callApiFromWidget()}))}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"App"},n.a.createElement(E,null),n.a.createElement("div",{className:"container"},n.a.createElement(b,null),n.a.createElement(I,{searchInput:function(t){return e.searchInput(t)},searchIssues:function(t){return e.search(t)},input:this.state.input}),this.QueryRender(),n.a.createElement(J,{searchBySort:function(t){return e.searchBySort(t)},currentSortOption:this.state.sortOption,searchedLabel:this.state.label,searchedLanguaged:this.state.language,totalCount:this.state.issuesCount,searchByLabel:function(t){return e.searchByLabel(t)},searchByLanguage:function(t){return e.searchByLanguage(t)}}),this.ResultsListRender(),n.a.createElement(V,null)))}}]),t}(s.Component);c.a.render(n.a.createElement($,null),document.getElementById("root"))},33:function(e,t){e.exports={clientID:"19b336af5cfb0ed688a1",clientSecret:"4849a46d86d872e9fb533a298664a16e4ee5e9cd"}},65:function(e,t,a){e.exports=a(158)},89:function(e,t,a){}},[[65,1,2]]]);
//# sourceMappingURL=main.4fc5c3ef.chunk.js.map