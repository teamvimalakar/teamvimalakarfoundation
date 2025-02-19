const Utils = {
    /**
     * Format a date to a readable string (e.g., 12 May 2024)
     * @param {string | Date} dateStr - The date string or object
     * @returns {string} - Formatted date
     */
    formatDate: (dateStr) => {
        const options = { day: '2-digit', month: 'short', year: 'numeric' };
        return new Date(dateStr).toLocaleDateString('en-US', options);
    },

    /**
     * Validate an email address format
     * @param {string} email - The email to validate
     * @returns {boolean} - True if valid, false otherwise
     */
    validateEmail: (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    },

    /**
     * Validate a phone number (basic validation for 10-15 digits)
     * @param {string} phone - The phone number
     * @returns {boolean} - True if valid, false otherwise
     */
    validatePhone: (phone) => {
        const regex = /^\d{10,15}$/;
        return regex.test(phone);
    },

    /**
     * Capitalize the first letter of each word in a string
     * @param {string} str - The input string
     * @returns {string} - Capitalized string
     */
    capitalizeWords: (str) => {
        return str.replace(/\b\w/g, (char) => char.toUpperCase());
    },

    /**
     * Format numbers with commas (e.g., 1000000 -> 1,000,000)
     * @param {number} num - The number to format
     * @returns {string} - Formatted number
     */
    formatNumber: (num) => {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },

    /**
     * Generate a random string (useful for unique IDs, tokens, etc.)
     * @param {number} length - Desired length of the string
     * @returns {string} - Random string
     */
    generateRandomString: (length = 8) => {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    },

    /**
     * Get a URL parameter value
     * @param {string} param - The parameter name
     * @returns {string | null} - Parameter value or null
     */
    getUrlParameter: (param) => {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    },

    /**
     * Scroll to an element smoothly
     * @param {string} selector - CSS selector of the target element
     */
    smoothScrollTo: (selector) => {
        document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' });
    }
};

// Export for use in other scripts (if using ES6 modules)
// export default Utils;
