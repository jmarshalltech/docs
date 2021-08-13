"use strict";(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[229],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=o,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(h,i(i({ref:t},c),{},{components:r})):n.createElement(h,i({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5701:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],l={sidebar_position:1.3},s="Providers",p={unversionedId:"tools/erc725js/providers",id:"tools/erc725js/providers",isDocsHomePage:!1,title:"Providers",description:"The provider by which @erc725/erc725.js will request blockchain data is set on",source:"@site/docs/tools/erc725js/providers.md",sourceDirName:"tools/erc725js",slug:"/tools/erc725js/providers",permalink:"/tools/erc725js/providers",editUrl:"https://github.com/lukso-network/docs-website/tree/main/docs/tools/erc725js/providers.md",version:"current",sidebarPosition:1.3,frontMatter:{sidebar_position:1.3},sidebar:"toolsSidebar",previous:{title:"Schemas",permalink:"/tools/erc725js/schemas"},next:{title:"How to write data to the key-value store of an ERC725Account",permalink:"/tools/erc725js/writing-data"}},c=[{value:"Web3",id:"web3",children:[]},{value:"Ethereum (Metamask)",id:"ethereum-metamask",children:[]},{value:"Graphql (Apollo)",id:"graphql-apollo",children:[]}],u={toc:c};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"providers"},"Providers"),(0,a.kt)("p",null,"The provider by which ",(0,a.kt)("inlineCode",{parentName:"p"},"@erc725/erc725.js")," will request blockchain data is set on\nthe instantiation of the class, through the configuration object."),(0,a.kt)("p",null,"The following provider types are supported:"),(0,a.kt)("h2",{id:"web3"},"Web3"),(0,a.kt)("p",null,"This will use the web3 provider available at web3.providers"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'import Web3 from "web3";\n\nconst web3provider = new Web3(\n  new Web3.providers.HttpProvider("https://rpc.l14.lukso.network")\n);\n')),(0,a.kt)("h2",{id:"ethereum-metamask"},"Ethereum (Metamask)"),(0,a.kt)("p",null,"This is the provider available at ",(0,a.kt)("inlineCode",{parentName:"p"},"window.ethereum")," injected into a\ncompatible web browser from the ",(0,a.kt)("a",{parentName:"p",href:"https://metamask.io/"},"Metamask plugin"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const ethereumProvider = window.ethereum;\n")),(0,a.kt)("h2",{id:"graphql-apollo"},"Graphql (Apollo)"),(0,a.kt)("p",null,"Also supported is a ",(0,a.kt)("a",{parentName:"p",href:"https://www.apollographql.com/docs/"},"GraphQL\nclient")," as the provider."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'import { ApolloClient, InMemoryCache } from "@apollo/client";\n\nconst apolloProvider = new ApolloClient({\n  uri: "http://localhost:8080/graphql",\n  cache: new InMemoryCache(),\n  fetchOptions: {\n    mode: "no-cors",\n  },\n});\n\n// NOTE: The apollo provider *must* be passed as a member of an object along\n// with a type member when creating a new instance of the ERC725 class.\nconst providerParam = {\n  provider: apolloProvider,\n  type: "ApolloClient",\n};\n')),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Currently the ",(0,a.kt)("inlineCode",{parentName:"p"},"link")," property of the options object for the Apollo client\nis not supported, and known to not function correctly."))))}d.isMDXComponent=!0}}]);