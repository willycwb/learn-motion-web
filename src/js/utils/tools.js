export class Tools {
    constructor() {
        this.$ = (...args) => Array.from(document.querySelectorAll(...args));
    }
    ready(fn) {
        if (
            // @ts-ignore
            document.attachEvent
                ? document.readyState === "complete"
                : document.readyState !== "loading"
        ) {
            fn();
        } else {
            document.addEventListener("DOMContentLoaded", fn);
        }
    }
    load(fn) {
        this.currentMethod(window.onload, fn);
        fn();
    }

    resize(fn) {
        window.addEventListener("resize", fn);
    }

    currentMethod(prop, fn) {
        let prevwindow = prop;
        prop = function() {
            if (prevwindow) {
                // @ts-ignore
                prevwindow();
            }
            fn();
        };
    }

    addClass(e, className) {
        if (Array.isArray(e)) {
            e.forEach(el => {
                if (el.classList) {
                    el.classList.add(className);
                } else {
                    el.className += " " + className;
                }
            });
        } else {
            if (e.classList) {
                e.classList.add(className);
            } else {
                e.className += " " + className;
            }
        }
    }
    removeClass(e, className) {
        if (Array.isArray(e)) {
            e.forEach(el => {
                if (el.classList) {
                    el.classList.remove(className);
                } else {
                    console.log(el);
                    el.className = el.className.replace(
                        new RegExp(
                            "(^|\\b)" +
                                className.split(" ").join("|") +
                                "(\\b|$)",
                            "gi"
                        ),
                        " "
                    );
                }
            });
        } else {
            if (e.classList) {
                e.classList.remove(className);
            } else {
                console.log(e);
                e.className = e.className.replace(
                    new RegExp(
                        "(^|\\b)" + className.split(" ").join("|") + "(\\b|$)",
                        "gi"
                    ),
                    " "
                );
            }
        }
    }
    smoothScroll(destination, duration = 200, easing = "linear", callback) {
        let top =
            Math.abs(
                document.querySelector("body").getBoundingClientRect().top -
                    document.querySelector(destination).getBoundingClientRect()
                        .top
            ) - document.querySelector("header").offsetHeight;
        document.querySelector(destination).focus();

        scrollIt(top, duration, easing);
        function scrollIt(destination, duration, easing) {
            const easings = {
                linear(t) {
                    return t;
                },
                easeInQuad(t) {
                    return t * t;
                },
                easeOutQuad(t) {
                    return t * (2 - t);
                },
                easeInOutQuad(t) {
                    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
                },
                easeInCubic(t) {
                    return t * t * t;
                },
                easeOutCubic(t) {
                    return --t * t * t + 1;
                },
                easeInOutCubic(t) {
                    return t < 0.5
                        ? 4 * t * t * t
                        : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
                },
                easeInQuart(t) {
                    return t * t * t * t;
                },
                easeOutQuart(t) {
                    return 1 - --t * t * t * t;
                },
                easeInOutQuart(t) {
                    return t < 0.5
                        ? 8 * t * t * t * t
                        : 1 - 8 * --t * t * t * t;
                },
                easeInQuint(t) {
                    return t * t * t * t * t;
                },
                easeOutQuint(t) {
                    return 1 + --t * t * t * t * t;
                },
                easeInOutQuint(t) {
                    return t < 0.5
                        ? 16 * t * t * t * t * t
                        : 1 + 16 * --t * t * t * t * t;
                }
            };

            const start = window.pageYOffset;
            const startTime =
                "now" in window.performance
                    ? performance.now()
                    : new Date().getTime();

            const documentHeight = Math.max(
                document.body.scrollHeight,
                document.body.offsetHeight,
                document.documentElement.clientHeight,
                document.documentElement.scrollHeight,
                document.documentElement.offsetHeight
            );
            const windowHeight =
                window.innerHeight ||
                document.documentElement.clientHeight ||
                document.getElementsByTagName("body")[0].clientHeight;
            const destinationOffset =
                typeof destination === "number"
                    ? destination
                    : destination.offsetTop;
            const destinationOffsetToScroll = Math.round(
                documentHeight - destinationOffset < windowHeight
                    ? documentHeight - windowHeight
                    : destinationOffset
            );

            if ("requestAnimationFrame" in window === false) {
                window.scroll(0, destinationOffsetToScroll);
                if (callback) {
                    callback();
                }
                return;
            }

            function scroll() {
                const now =
                    "now" in window.performance
                        ? performance.now()
                        : new Date().getTime();
                const time = Math.min(1, (now - startTime) / duration);
                const timeFunction = easings[easing](time);
                window.scroll(
                    0,
                    Math.ceil(
                        timeFunction * (destinationOffsetToScroll - start) +
                            start
                    )
                );

                if (window.pageYOffset === destinationOffsetToScroll) {
                    if (callback) {
                        callback();
                    }
                    return;
                }

                requestAnimationFrame(scroll);
            }

            scroll();
        }
    }

    nestedObj(obj, nested) {
        for (let e of obj) {
            return obj[e].toString() == nested
                ? obj[e]
                : () => {
                      return obj[e] != undefined && typeof obj[e] === "object"
                          ? this.nestedObj(obj)
                          : false;
                  };
        }
    }

    parents(el) {
        let parentsArr = [];
        recursive(el);
        function recursive(e) {
            if (e.parentElement != null) {
                parentsArr.push(e.parentElement);
                recursive(e.parentElement);
            }
        }
        return parentsArr;
    }
    window() {
        let w = window,
            d = document,
            e = d.documentElement,
            g = d.getElementsByTagName("body")[0];
        return {
            height: w.innerHeight || e.clientHeight || g.clientHeight,
            width: w.innerWidth || e.clientWidth || g.clientWidth
        };
    }
}
