"use strict";
(() => {
var exports = {};
exports.id = 922;
exports.ids = [922];
exports.modules = {

/***/ 1411:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ MainContent)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3135);
/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6809);
/* harmony import */ var rehype_raw__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1871);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_markdown__WEBPACK_IMPORTED_MODULE_2__, remark_gfm__WEBPACK_IMPORTED_MODULE_3__, rehype_raw__WEBPACK_IMPORTED_MODULE_4__]);
([react_markdown__WEBPACK_IMPORTED_MODULE_2__, remark_gfm__WEBPACK_IMPORTED_MODULE_3__, rehype_raw__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

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



String.prototype.hashCode = function() {
    var hash = 0, i, chr;
    if (this.length === 0) return hash;
    for(i = 0; i < this.length; i++){
        chr = this.charCodeAt(i);
        hash = (hash << 5) - hash + chr;
        hash |= 0;
    }
    return hash;
};
function MainContent(props1) {
    const content = props1.content;
    const codes = props1.codes ? new Map(JSON.parse(props1.codes)) : new Map();
    // Add id attributes to headings
    const extractText = (value)=>{
        if (typeof value === "string") {
            return value;
        } else {
            return value.props.children;
        }
    };
    const scanArray = (array)=>{
        const newArray = array.map(extractText);
        let newId = newArray.join("").replace(/[&\/\\#,+()!$~%.'’":*?<>{}]/g, "").toLowerCase();
        newId = newId.replace(/ /g, "-");
        return newId;
    };
    const getLink = (element, id)=>{
        if (element.tagName.toLowerCase() === "path") element = element.parentElement;
        const elementNodeList = document.querySelectorAll(`#${id}`);
        const elementArray = Array.prototype.slice.call(elementNodeList);
        const count = elementArray.indexOf(element.parentElement);
        if (count === 0) {
            location.hash = `#${id}`;
        } else {
            location.hash = `#${id}-${count}`;
        }
        navigator.clipboard.writeText(window.location.href);
        element.parentElement.scrollIntoView();
    };
    const toc = (show)=>{
        props1.handleToc(show);
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_markdown__WEBPACK_IMPORTED_MODULE_2__["default"], {
        components: {
            h2 ({ node , inline , className , children , ...props }) {
                let id = "";
                toc(true);
                if (children.length === 1) {
                    id = children[0].toString().toLowerCase().replace(/[&\/\\#,+()!$~%.'’":*?<>{}]/g, "").replace(/ /g, "-");
                } else {
                    id = scanArray(children);
                }
                return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                    id: id,
                    "data-section": id,
                    className: "section",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "30",
                            height: "30",
                            fill: "currentColor",
                            className: "bi bi-link-45deg mdButton pe-2",
                            viewBox: "0 0 16 16",
                            onClick: (e)=>getLink(e.target, id)
                            ,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    d: "M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    d: "M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"
                                })
                            ]
                        }),
                        children
                    ]
                }));
            },
            h3 ({ node , inline , className , children , ...props }) {
                let id = "";
                toc(true);
                if (children.length === 1) {
                    id = children[0].toString().toLowerCase().replace(/[&\/\\#,+()!$~%.'’":*?<>{}]/g, "").replace(/ /g, "-");
                } else {
                    id = scanArray(children);
                }
                return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                    id: id,
                    "data-section": id,
                    className: "section",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "30",
                            height: "30",
                            fill: "currentColor",
                            className: "bi bi-link-45deg mdButton pe-2",
                            viewBox: "0 0 16 16",
                            onClick: (e)=>getLink(e.target, id)
                            ,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    d: "M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    d: "M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"
                                })
                            ]
                        }),
                        children
                    ]
                }));
            },
            h4 ({ node , inline , className , children , ...props }) {
                let id = "";
                toc(true);
                if (children.length === 1) {
                    id = children[0].toString().toLowerCase().replace(/[&\/\\#,+()!$~%.'’":*?<>{}]/g, "").replace(/ /g, "-");
                } else {
                    id = scanArray(children);
                }
                return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h4", {
                    id: id,
                    "data-section": id,
                    className: "section",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "30",
                            height: "30",
                            fill: "currentColor",
                            className: "bi bi-link-45deg mdButton pe-2",
                            viewBox: "0 0 16 16",
                            onClick: (e)=>getLink(e.target, id)
                            ,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    d: "M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    d: "M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"
                                })
                            ]
                        }),
                        children
                    ]
                }));
            },
            h5 ({ node , inline , className , children , ...props }) {
                let id = "";
                toc(true);
                if (children.length === 1) {
                    id = children[0].toString().toLowerCase().replace(/[&\/\\#,+()!$~%.'’":*?<>{}]/g, "").replace(/ /g, "-");
                } else {
                    id = scanArray(children);
                }
                return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h5", {
                    id: id,
                    "data-section": id,
                    className: "section",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "30",
                            height: "30",
                            fill: "currentColor",
                            className: "bi bi-link-45deg mdButton pe-2",
                            viewBox: "0 0 16 16",
                            onClick: (e)=>getLink(e.target, id)
                            ,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    d: "M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    d: "M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"
                                })
                            ]
                        }),
                        children
                    ]
                }));
            },
            h6 ({ node , inline , className , children , ...props }) {
                let id = "";
                toc(true);
                if (children.length === 1) {
                    id = children[0].toString().toLowerCase().replace(/[&\/\\#,+()!$~%.'’":*?<>{}]/g, "").replace(/ /g, "-");
                } else {
                    id = scanArray(children);
                }
                return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h6", {
                    id: id,
                    "data-section": id,
                    className: "section",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "30",
                            height: "30",
                            fill: "currentColor",
                            className: "bi bi-link-45deg mdButton pe-2",
                            viewBox: "0 0 16 16",
                            onClick: (e)=>getLink(e.target, id)
                            ,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    d: "M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    d: "M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"
                                })
                            ]
                        }),
                        children
                    ]
                }));
            },
            code ({ node , inline , className , children , ...props }) {
                if (typeof children[0] === 'string') {
                    const key = children[0].trim().split(/\r?\n/).map((row)=>row.trim()
                    ).join('\n');
                    const highlightedCode = codes.get(key.hashCode());
                    if (highlightedCode) {
                        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            dangerouslySetInnerHTML: {
                                __html: highlightedCode
                            }
                        }));
                    }
                }
                const match = /language-(\w+)/.exec(className || '');
                return inline ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("code", {
                    className: className,
                    ...props,
                    children: children
                }) : match ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    dangerouslySetInnerHTML: {
                        __html: String(children).replace(/\n$/, '')
                    }
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("pre", {
                    className: "default",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("code", {
                        className: className,
                        ...props,
                        children: children
                    })
                });
            },
            table ({ node , className , children , ...props }) {
                return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "mdTable",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("table", {
                        ...props,
                        children: children
                    })
                }));
            }
        },
        remarkPlugins: [
            remark_gfm__WEBPACK_IMPORTED_MODULE_3__["default"]
        ],
        rehypePlugins: [
            rehype_raw__WEBPACK_IMPORTED_MODULE_4__["default"]
        ],
        children: content
    }));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1717:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Toc)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var unified__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4390);
/* harmony import */ var remark_parse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6688);
/* harmony import */ var remark_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7740);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([unified__WEBPACK_IMPORTED_MODULE_2__, remark_parse__WEBPACK_IMPORTED_MODULE_3__, remark_html__WEBPACK_IMPORTED_MODULE_4__]);
([unified__WEBPACK_IMPORTED_MODULE_2__, remark_parse__WEBPACK_IMPORTED_MODULE_3__, remark_html__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

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



function Toc(props) {
    const source1 = props.source;
    let uniqueHeadingList = [];
    let hash = false;
    const clickMe = (triggerElement, sectionId, unique)=>{
        if (triggerElement.tagName.toLowerCase() === "code") triggerElement = triggerElement.parentElement;
        let id, sectionNumber;
        if (unique) {
            id = sectionId;
        } else {
            const match = sectionId.match(/(?<id>(?:\w|-)+)-(?<count>\d+)$/);
            id = match.groups.id;
            sectionNumber = match.groups.count;
        }
        const elements = document.querySelectorAll(`#${id}`);
        let element;
        if (sectionNumber == undefined) {
            element = elements[0];
        } else {
            element = elements[sectionNumber];
        }
        const tocItems = document.querySelectorAll(".title-anchor");
        tocItems.forEach(function(el) {
            el.classList.remove("active");
        });
        triggerElement.classList.add("active");
        location.hash = "#" + sectionId;
        element.scrollIntoView();
    };
    //Highlight toc on scroll
    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(()=>{
        window.addEventListener("hashchange", ()=>{
            hash = true;
            setTimeout(()=>hash = false
            , 1000);
        });
        window.addEventListener("scroll", ()=>{
            if (!hash) {
                checkVisibleSection();
            }
        });
    }, []);
    //---Check the visible section
    function checkVisibleSection() {
        let nav = document.getElementById("markdown-navigation"), sections = document.querySelectorAll(".section"), minor = window.innerHeight, section = null;
        //---Select the section closest to the top
        [].forEach.call(sections, (item)=>{
            let offset = item.getBoundingClientRect();
            if (Math.abs(offset.top) < minor + 25) {
                minor = Math.abs(offset.top);
                section = item;
            }
        });
        //---If the section exists
        if (section) {
            let sectionName = section.dataset.section, similarSections = Array.prototype.slice.call(document.querySelectorAll('.mdContent [data-section="' + sectionName + '"]')), index = similarSections.indexOf(section), link = nav.querySelector(`[data-section="${sectionName}${index > 0 ? `-${index}` : ""}"]`);
            //---If the link is not already active
            if (!link.classList.contains("active")) {
                //---Remove the active class
                nav.querySelector("div.active").classList.remove("active");
                //---Add the active class
                link.classList.add("active");
            }
        }
    }
    // get the count of an element in an array
    const getArrayCount = (array, value)=>{
        return array.filter((item)=>item === value
        ).length;
    };
    const NavGen = (count, source)=>{
        const [data, setData] = react__WEBPACK_IMPORTED_MODULE_1__.useState({});
        // declare the async data fetching function
        const fetchData = react__WEBPACK_IMPORTED_MODULE_1__.useCallback(async ()=>{
            const file = await (0,unified__WEBPACK_IMPORTED_MODULE_2__.unified)().use(remark_parse__WEBPACK_IMPORTED_MODULE_3__["default"]).use(remark_html__WEBPACK_IMPORTED_MODULE_4__["default"]).process(source);
            let level = "", text = "", sectionId = "", unique = true;
            const match = String(file).match(/h(\d)/);
            if (match.length > 1) {
                const headingLevel = match[1];
                if (headingLevel > 0 && headingLevel < 7) {
                    level = `title-level${headingLevel}`;
                    text = String(file).match(/<h\d>(.*?)<\/h\d>/g).map(function(val) {
                        return val.replace(/<\/?h\d>/g, "");
                    });
                }
            }
            sectionId = String(text).replace(/<code>/g, "").replace(/<\/code>/g, "").replace(/[&\/\\#,+()!$~%.'’":*?<>{}]/g, "").replace(/x26;/g, "").toLowerCase().replace(/ /g, "-").replace(/x3c;/g, "");
            const headingCount = getArrayCount(uniqueHeadingList, sectionId);
            uniqueHeadingList.push(sectionId);
            if (headingCount !== 0) {
                unique = false;
                sectionId = sectionId + "-" + headingCount;
            }
            const myObj = {
                level,
                text,
                sectionId,
                active: count === 1 ? true : false,
                unique
            };
            setData(myObj);
        }, [
            count,
            source
        ]);
        // the useEffect is only there to call `fetchData` at the right time
        react__WEBPACK_IMPORTED_MODULE_1__.useEffect(()=>{
            fetchData()// make sure to catch any error
            .catch(console.error);
        }, [
            fetchData
        ]);
        return data;
    };
    function z(content) {
        const myArray = content.split("\n");
        let titleCount = 0, codeBlockFound = false;
        let newArray = myArray.map((value)=>{
            if (value.match(/^\s*```/)) {
                codeBlockFound = !codeBlockFound;
            }
            if (value.match(/^#/) && !codeBlockFound) {
                titleCount++;
                return NavGen(titleCount, value);
            }
        });
        newArray = newArray.filter(function(element) {
            return element !== undefined;
        });
        return newArray;
    }
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            id: "markdown-navigation",
            className: "markdown-navigation",
            children: z(source1).map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    "data-section": item.sectionId,
                    className: `title-anchor ${item.level}${item.active ? " active" : ""}`,
                    onClick: (e)=>clickMe(e.target, item.sectionId, item.unique)
                    ,
                    dangerouslySetInnerHTML: {
                        __html: item.text
                    }
                }, item.sectionId)
            )
        })
    }));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3286:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5152);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_common_footer_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4564);

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
    const TopNav = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__["default"])(null, {
        loadableGenerated: {
            modules: [
                "../layouts/LayoutDocs.js -> " + "../components/common/top-nav/TopNav"
            ]
        },
        ssr: false
    });
    const Meta = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__["default"])(null, {
        loadableGenerated: {
            modules: [
                "../layouts/LayoutDocs.js -> " + "../components/common/meta/Meta"
            ]
        },
        ssr: false
    });
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1.0"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "twitter:card",
                        content: "summary"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "twitter:site",
                        content: "@ballerinalang"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "twitter:creator",
                        content: "@ballerinalang"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "twitter:card",
                        content: "summary_large_image"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("script", {
                        // eslint-disable-next-line react/no-danger
                        dangerouslySetInnerHTML: {
                            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.setAttributeNode(d.createAttribute('data-ot-ignore'));j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PSL2TX4');`
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("script", {
                        type: "text/javascript",
                        crossOrigin: "true",
                        src: "https://cdn.jsdelivr.net/npm/@docsearch/js@alpha"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("script", {
                        src: "https://cookie-cdn.cookiepro.com/scripttemplates/otSDKStub.js",
                        type: "text/javascript",
                        charSet: "UTF-8",
                        "data-domain-script": "630ad396-5fd5-4745-92ae-2765dc8841ee",
                        defer: true
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Meta, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Stack, {
                gap: 0,
                className: "main-wrapper",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TopNav, {
                        launcher: "docs"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Container, {
                        className: "wrap-page-content",
                        fluid: true,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Row, {
                            children: children
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_footer_Footer__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
                ]
            })
        ]
    }));
};


/***/ }),

/***/ 1663:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "default": () => (/* binding */ PostPage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8076);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1664);
/* harmony import */ var _layouts_LayoutDocs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3286);
/* harmony import */ var _components_common_main_content_MainContent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1411);
/* harmony import */ var _components_common_pg_toc_Toc__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1717);
/* harmony import */ var _utils_highlighter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2643);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_common_main_content_MainContent__WEBPACK_IMPORTED_MODULE_8__, _components_common_pg_toc_Toc__WEBPACK_IMPORTED_MODULE_9__]);
([_components_common_main_content_MainContent__WEBPACK_IMPORTED_MODULE_8__, _components_common_pg_toc_Toc__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

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









String.prototype.hashCode = function() {
    var hash = 0, i, chr;
    if (this.length === 0) return hash;
    for(i = 0; i < this.length; i++){
        chr = this.charCodeAt(i);
        hash = (hash << 5) - hash + chr;
        hash |= 0;
    }
    return hash;
};
async function getStaticPaths() {
    // Retrieve all our slugs
    const files = fs__WEBPACK_IMPORTED_MODULE_1___default().readdirSync('_posts');
    const paths = files.map((fileName)=>({
            params: {
                slug: fileName.replace('.md', '')
            }
        })
    );
    return {
        paths,
        fallback: false
    };
}
async function getStaticProps({ params: { slug  }  }) {
    const fileName = fs__WEBPACK_IMPORTED_MODULE_1___default().readFileSync(`_posts/${slug}.md`, 'utf-8');
    const { data: frontmatter , content  } = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(fileName);
    let codes = await (0,_utils_highlighter__WEBPACK_IMPORTED_MODULE_10__/* .highlight */ .C)(content);
    return {
        props: {
            frontmatter,
            content,
            codes,
            slug
        }
    };
}
function PostPage({ frontmatter , content , codes , slug  }) {
    // Show page toc
    const [showToc, setShowToc] = react__WEBPACK_IMPORTED_MODULE_3___default().useState(false);
    const handleToc = (data)=>{
        setShowToc(data);
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: frontmatter.abstract
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "keywords",
                        content: "ballerinalang, integration, microservices, programming language, cloud native, ballerina language"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: frontmatter.title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:type",
                        content: "article"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:title",
                        content: `Ballerina - ${frontmatter.title}`
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:description",
                        content: frontmatter.abstract
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:image",
                        content: `https://blog.ballerina.io/blog-images/${frontmatter.socialmediaimage}`
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:title",
                        content: `Ballerina - ${frontmatter.title}`
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:image",
                        content: `https://blog.ballerina.io/blog-images/${frontmatter.socialmediaimage}`
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "twitter:title",
                        content: `Ballerina - ${frontmatter.title}`
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "twitter:description",
                        content: frontmatter.abstract
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "twitter:text:description",
                        content: frontmatter.abstract
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "twitter:image",
                        content: `https://blog.ballerina.io/blog-images/${frontmatter.socialmediaimage}`
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "twitter:image",
                        content: `https://blog.ballerina.io/blog-images/${frontmatter.socialmediaimage}`
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layouts_LayoutDocs__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Col, {
                        sm: 12,
                        md: 3,
                        xxl: 2,
                        className: "leftNav d-none d-md-block",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_6__["default"], {
                            href: "/",
                            passHref: true,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "backToBlogs",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "30",
                                        height: "30",
                                        fill: "#3ad1ca",
                                        className: "bi bi-box-arrow-left",
                                        viewBox: "0 0 16 16",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                fillRule: "evenodd",
                                                d: "M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                fillRule: "evenodd",
                                                d: "M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "m-0 p-0",
                                        children: "Back to Blogs"
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Col, {
                        xs: 12,
                        className: "d-block d-md-none",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_6__["default"], {
                            href: "/",
                            passHref: true,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "backToBlogs",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "30",
                                        height: "30",
                                        fill: "#3ad1ca",
                                        className: "bi bi-box-arrow-left",
                                        viewBox: "0 0 16 16",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                fillRule: "evenodd",
                                                d: "M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                fillRule: "evenodd",
                                                d: "M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "m-0 p-0",
                                        children: "Back to Blogs"
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Col, {
                        xs: 12,
                        md: 7,
                        xxl: 7,
                        className: "mdContent",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Container, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "topRow",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Col, {
                                        xs: 12,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                children: frontmatter.title
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                className: "dateAuth",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "blogAuthor",
                                                        children: frontmatter.author
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                    frontmatter[`published-date`]
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_main_content_MainContent__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                    content: content,
                                    handleToc: handleToc,
                                    codes: codes
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Col, {
                        md: 2,
                        xxl: 3,
                        className: "pageToc d-none d-md-block",
                        children: showToc ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                    children: "On this page"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_pg_toc_Toc__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                    source: content
                                })
                            ]
                        }) : null
                    })
                ]
            })
        ]
    }));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2643:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "C": () => (/* binding */ highlight)
});

;// CONCATENATED MODULE: external "shiki"
const external_shiki_namespaceObject = require("shiki");
;// CONCATENATED MODULE: ./utils/highlighter.js

const supportedLangs = [
    "bash",
    "ballerina",
    "toml",
    "yaml",
    "sh",
    "json",
    "graphql",
    "sql",
    "java",
    "xml",
    "cmd"
];
String.prototype.hashCode = function() {
    var hash = 0, i, chr;
    if (this.length === 0) return hash;
    for(i = 0; i < this.length; i++){
        chr = this.charCodeAt(i);
        hash = (hash << 5) - hash + chr;
        hash |= 0;
    }
    return hash;
};
const highlight = async (content)=>{
    const highlighter = await (0,external_shiki_namespaceObject.getHighlighter)({
        theme: 'github-light',
        langs: supportedLangs
    });
    let codes = new Map();
    const regex = /```(\w+)([\s\S]*?)```/g;
    let match = [];
    while(match = regex.exec(content)){
        let code = match[2];
        const firstLine = code.split('/n')[0];
        const indent = firstLine.length - firstLine.trimStart().length;
        const key = code.trim().split(/\r?\n/).map((row)=>row.trim()
        ).join('\n');
        code = code.split(/\r?\n/).map((row)=>row.substring(indent - 1)
        ).join('\n');
        const lang = match[1].toLowerCase();
        codes.set(key.hashCode(), highlighter.codeToHtml(code.trim(), {
            lang: supportedLangs.includes(lang) ? lang : ''
        }));
    }
    return JSON.stringify([
        ...codes
    ]);
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

/***/ 3135:
/***/ ((module) => {

module.exports = import("react-markdown");;

/***/ }),

/***/ 1871:
/***/ ((module) => {

module.exports = import("rehype-raw");;

/***/ }),

/***/ 6809:
/***/ ((module) => {

module.exports = import("remark-gfm");;

/***/ }),

/***/ 7740:
/***/ ((module) => {

module.exports = import("remark-html");;

/***/ }),

/***/ 6688:
/***/ ((module) => {

module.exports = import("remark-parse");;

/***/ }),

/***/ 4390:
/***/ ((module) => {

module.exports = import("unified");;

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,142,564], () => (__webpack_exec__(1663)));
module.exports = __webpack_exports__;

})();