"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 5238:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Blog),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "fs"
var external_fs_ = __webpack_require__(7147);
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_);
// EXTERNAL MODULE: external "gray-matter"
var external_gray_matter_ = __webpack_require__(8076);
var external_gray_matter_default = /*#__PURE__*/__webpack_require__.n(external_gray_matter_);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(358);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
// EXTERNAL MODULE: ./components/common/footer/Footer.js
var Footer = __webpack_require__(4564);
;// CONCATENATED MODULE: ./layouts/LayoutHome.js

/**
 * Copyright (c) 2023, WSO2 LLC (http://www.wso2.com) All Rights Reserved.
 *
 * WSO2 LLC licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */ 



function Layout({ children  }) {
    const TopNav = (0,dynamic["default"])(null, {
        loadableGenerated: {
            modules: [
                "../layouts/LayoutHome.js -> " + "../components/common/top-nav/TopNav"
            ]
        },
        ssr: false
    });
    const Meta = (0,dynamic["default"])(null, {
        loadableGenerated: {
            modules: [
                "../layouts/LayoutHome.js -> " + "../components/common/meta/Meta"
            ]
        },
        ssr: false
    });
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1.0"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:image",
                        content: "https://ballerina.io/images/ballerina-generic-social-media-image-2023.png"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:title",
                        content: "Ballerina - Blog"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:image",
                        content: "https://ballerina.io/images/ballerina-generic-social-media-image-2023.png"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "twitter:card",
                        content: "summary"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "twitter:site",
                        content: "@ballerinalang"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "twitter:creator",
                        content: "@ballerinalang"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "twitter:title",
                        content: "Ballerina - Blog"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "twitter:card",
                        content: "summary_large_image"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "twitter:image",
                        content: "https://ballerina.io/images/ballerina-generic-social-media-image-2023.png"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "twitter:image",
                        content: "https://ballerina.io/images/ballerina-generic-social-media-image-2023.png"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("script", {
                        // eslint-disable-next-line react/no-danger
                        dangerouslySetInnerHTML: {
                            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.setAttributeNode(d.createAttribute('data-ot-ignore'));j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PSL2TX4');`
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("script", {
                        type: "text/javascript",
                        crossOrigin: "true",
                        src: "https://cdn.jsdelivr.net/npm/@docsearch/js@alpha"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("script", {
                        src: "https://cookie-cdn.cookiepro.com/scripttemplates/otSDKStub.js",
                        type: "text/javascript",
                        charSet: "UTF-8",
                        "data-domain-script": "630ad396-5fd5-4745-92ae-2765dc8841ee",
                        defer: true
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Meta, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Stack, {
                gap: 0,
                className: "main-wrapper other",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(TopNav, {
                        launcher: "docs"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "wrap-page-content",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Row, {
                            className: "community-wrap-row",
                            children: children
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Footer/* default */.Z, {})
                ]
            })
        ]
    }));
};

;// CONCATENATED MODULE: ./pages/index.js

/**
 * Copyright (c) 2023, WSO2 LLC (http://www.wso2.com) All Rights Reserved.
 *
 * WSO2 LLC licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */ 





async function getStaticProps() {
    const files = external_fs_default().readdirSync('_posts');
    const allPostsData = files.map((fileName)=>{
        const slug = fileName.replace('.md', '');
        const readFile = external_fs_default().readFileSync(`_posts/${fileName}`, 'utf-8');
        const { data: frontmatter  } = external_gray_matter_default()(readFile);
        return {
            slug,
            frontmatter
        };
    });
    return {
        props: {
            allPostsData
        }
    };
}
function Blog({ allPostsData  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        httpEquiv: "X-UA-Compatible",
                        content: "IE=edge"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1.0"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Ballerina is a comprehensive language that is easy to grasp for anyone with prior programming experience. Start learning with the material below."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "author",
                        content: "WSO2 LLC"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "keywords",
                        content: "ballerina, learn, documentation, docs, programming language"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "shortcut icon",
                        href: "/img/favicon.ico"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Ballerina Blog"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:type",
                        content: "article"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:title",
                        content: "Ballerina Blog"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:description",
                        content: "Ballerina is a comprehensive language that is easy to grasp for anyone with prior programming experience. Start learning with the material below."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:image",
                        itemProp: "image",
                        content: "https://ballerina.io/images/ballerina-generic-social-media-image-2023.png"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:title",
                        content: "Ballerina Blog"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:image",
                        content: "https://ballerina.io/images/ballerina-generic-social-media-image-2023.png"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:description",
                        itemProp: "image",
                        content: "Ballerina is a comprehensive language that is easy to grasp for anyone with prior programming experience. Start learning with the material below."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "twitter:card",
                        content: "summary"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "twitter:site",
                        content: "@ballerinalang"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "twitter:creator",
                        content: "@ballerinalang"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "twitter:title",
                        content: "Ballerina"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "twitter:card",
                        content: "summary_large_image"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "twitter:description",
                        content: "Ballerina is a comprehensive language that is easy to grasp for anyone with prior programming experience. Start learning with the material below."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "twitter:image",
                        content: "https://ballerina.io/images/ballerina-generic-social-media-image-2023.png"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "twitter:text:description",
                        content: "Ballerina is a comprehensive language that is easy to grasp for anyone with prior programming experience. Start learning with the material below."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "twitter:image",
                        content: "https://ballerina.io/images/ballerina-generic-social-media-image-2023.png"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Layout, {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Col, {
                    sm: 12,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Row, {
                            className: "pageHeader pageContentRow bloglanding",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                xs: 12,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Container, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                        children: "Ballerina Blog"
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Row, {
                            className: "pageContentRow bloglanding",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                xs: 12,
                                md: 12,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Container, {
                                    children: allPostsData.reverse().map(({ slug , frontmatter  }, index)=>/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "blogInfo",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        className: "blogDate",
                                                        children: frontmatter[`published-date`]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "blogLink",
                                                        target: "_blank",
                                                        rel: "noreferrer",
                                                        href: `/posts/${slug}`,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                            className: "blogTitle",
                                                            children: frontmatter.title
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        className: "blogAuthor",
                                                        children: frontmatter.author
                                                    })
                                                ]
                                            }, index)
                                        })
                                    )
                                })
                            })
                        })
                    ]
                })
            })
        ]
    }));
};


/***/ }),

/***/ 8076:
/***/ ((module) => {

module.exports = require("gray-matter");

/***/ }),

/***/ 4897:
/***/ ((module) => {

module.exports = require("next-image-export-optimizer");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 358:
/***/ ((module) => {

module.exports = require("react-bootstrap");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,142,564], () => (__webpack_exec__(5238)));
module.exports = __webpack_exports__;

})();