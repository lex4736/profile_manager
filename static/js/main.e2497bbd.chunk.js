(this.webpackJsonpprofile_manager=this.webpackJsonpprofile_manager||[]).push([[0],{22:function(e,t,a){},23:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a(12),s=a.n(r),i=(a(22),a(23),a(13)),c=a(14),o=a(17),l=a(16),d=a(0);var h=function(e){var t=e.handleSearchChange;return Object(d.jsx)("div",{className:"searchbox",children:Object(d.jsx)("form",{className:"form-inline",children:Object(d.jsx)("input",{className:"form-control",type:"search",placeholder:"Search","aria-label":"Search",onChange:function(e){return t(e)}})})})};var j=function(e){var t=e.handleSearchChange;return Object(d.jsx)("nav",{children:Object(d.jsx)("div",{children:Object(d.jsx)(h,{handleSearchChange:t})})})},m=a(15),u=a.n(m),b=function(){return u.a.get("https://randomuser.me/api/?results=150&nat=us")};var f=function(e){var t=e.users;function a(e){var t=e.split("-"),a=t[0];return[t[1],t[2].split("T")[0],a].join("-")}return Object(d.jsx)("tbody",{children:void 0!==t[0]&&void 0!==t[0].name?t.map((function(e){var t=e.login,n=e.name,r=e.picture,s=e.phone,i=e.email,c=e.dob;return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{"data-th":"Image",className:"align-middle",children:Object(d.jsx)("img",{src:r.medium,alt:"profile image for "+n.first+" "+n.last,className:"img-responsive"})}),Object(d.jsxs)("td",{"data-th":"Name",className:"name-cell align-middle",children:[n.first," ",n.last]}),Object(d.jsx)("td",{"data-th":"Phone",className:"align-middle",children:s}),Object(d.jsx)("td",{"data-th":"Email",className:"align-middle",children:Object(d.jsx)("a",{href:"mailto:"+i,target:"__blank",children:i})}),Object(d.jsx)("td",{"data-th":"DOB",className:"align-middle",children:a(c.date)})]},t.uuid)})):Object(d.jsx)(d.Fragment,{})})};var v=function(e){var t=e.headings,a=e.users,n=e.handleSort;return Object(d.jsx)("div",{className:"datatable mt-5",children:Object(d.jsxs)("table",{id:"table",className:"table table-striped table-hover table-condensed",children:[Object(d.jsx)("thead",{className:"thead2",children:Object(d.jsx)("tr",{children:t.map((function(e){var t=e.name,a=e.width;return Object(d.jsxs)("th",{className:"col",style:{width:a},onClick:function(){n(t.toLowerCase())},children:[t,Object(d.jsx)("span",{className:"pointer"})]},t)}))})}),Object(d.jsx)(f,{users:a})]})})},O=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={users:[{}],order:"descend",filteredUsers:[{}]},e.headings=[{name:"Image"},{name:"Name"},{name:"Phone"},{name:"Email"},{name:"DOB"}],e.handleSort=function(t){"descend"===e.state.order?e.setState({order:"ascend"}):e.setState({order:"descend"});var a=e.state.filteredUsers.sort((function(a,n){return"ascend"===e.state.order?void 0===a[t]?1:void 0===n[t]?-1:"name"===t?a[t].first.localeCompare(n[t].first):a[t]-n[t]:void 0===a[t]?1:void 0===n[t]?-1:"name"===t?n[t].first.localeCompare(a[t].first):n[t]-a[t]}));e.setState({filteredUsers:a})},e.handleSearchChange=function(t){console.log(t.target.value);var a=t.target.value,n=e.state.users.filter((function(e){return-1!==Object.values(e).join("").toLowerCase().indexOf(a.toLowerCase())}));e.setState({filteredUsers:n})},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;b().then((function(t){e.setState({users:t.data.results,filteredUsers:t.data.results})}))}},{key:"render",value:function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(j,{handleSearchChange:this.handleSearchChange}),Object(d.jsx)("div",{className:"data-area",children:Object(d.jsx)(v,{headings:this.headings,users:this.state.filteredUsers,handleSort:this.handleSort})})]})}}]),a}(n.Component);var g=function(){return Object(d.jsxs)("div",{className:"container02",children:[Object(d.jsx)("h1",{children:" PROFILE MANAGER "}),'Below you can view information regarding existing employees. Use the filter option to find a specific employee or click on the "name" column to sort through the employees',Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)(O,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(d.jsx)(g,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[43,1,2]]]);
//# sourceMappingURL=main.e2497bbd.chunk.js.map