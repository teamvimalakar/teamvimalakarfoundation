document.addEventListener("DOMContentLoaded", () => {
    initAnalytics();
});

function initAnalytics() {
    console.log("Analytics initialized");
    trackPageView();
    trackClicks();
    trackFormSubmissions();
}

function trackPageView() {
    const pagePath = window.location.pathname;
    console.log(`Page viewed: ${pagePath}`);
    if (typeof gtag !== "undefined") {
        gtag("event", "page_view", {
            page_path: pagePath,
        });
    }
}

function trackClicks() {
    document.body.addEventListener("click", (event) => {
        const target = event.target.closest("a, button");
        if (target) {
            console.log(`Clicked on: ${target.innerText || target.href}`);
            if (typeof gtag !== "undefined") {
                gtag("event", "click", {
                    event_category: "interaction",
                    event_label: target.innerText || target.href,
                });
            }
        }
    });
}

function trackFormSubmissions() {
    document.body.addEventListener("submit", (event) => {
        const form = event.target;
        console.log(`Form submitted: ${form.name || form.id || "unknown form"}`);
        if (typeof gtag !== "undefined") {
            gtag("event", "submit", {
                event_category: "form_submission",
                event_label: form.name || form.id || "unknown form",
            });
        }
    });
}
