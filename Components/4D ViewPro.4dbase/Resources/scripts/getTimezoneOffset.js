// temporary fix to avoid on central european time a wrong computation of time with historical dates
// because timezoneOffset uses seconds for dates around 1900. Using this algorithm returns
// a decimal timezoneOffset that has more precision than the generic getDateTimeOffset that returns only minutes
(function () {
    var _getTimezoneOffset = Date.prototype.getTimezoneOffset;

    Date.prototype.getTimezoneOffset = function () {
        let year = this.getFullYear();
        let month = this.getMonth();
        let day = this.getDate();
        if ((year < 1911) || ((year == 1911) && ((month < 2)) || ((month == 2) && (day < 11)))) {
            let utcDate = new Date(Date.UTC(year, month, day));
            let localDate = new Date(year, month, day)
            return (localDate.getTime() - utcDate.getTime()) / 60000;
        } else {
            return _getTimezoneOffset.apply(this);
        }
    }
})();