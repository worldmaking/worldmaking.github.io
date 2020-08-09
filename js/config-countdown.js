(function ($) {
    // USE STRICT
    "use strict";


    //-------------------------------------------------------
    // Config CountDown
    //-------------------------------------------------------

    try {
        $('.cd100').each(function () {
            var that = $(this);
            var y = 0, m =0, d = 0, h = 0, min = 0, sec = 0;
            var countdownYears = that.find('[data-years]');
            var countdownMonths = that.find('[data-months]');
            var countdownDays = that.find('[data-days]');
            var countdownHours = that.find('[data-hours]');
            var countdownMinutes = that.find('[data-minutes]');
            var countdownSeconds = that.find('[data-seconds]');

            if (countdownYears != null) {
                y = countdownYears.data('years');
            }

            if (countdownMonths != null) {
                m = countdownMonths.data('months');
            }

            if (countdownDays != null) {
                d = countdownDays.data('days');
            }

            if (countdownHours != null) {
                h = countdownHours.data('hours');
            }

            if (countdownMinutes != null) {
                min = countdownMinutes.data('minutes');
            }

            if (countdownSeconds != null) {
                sec = countdownSeconds.data('seconds');
            }

            that.countdown100({
                /*Set Endtime here*/
                /*Endtime must be > current time*/
                endtimeYear: y,
                endtimeMonth: m,
                endtimeDate: d,
                endtimeHours: h,
                endtimeMinutes: min,
                endtimeSeconds: sec,
                timeZone: ""
                // ex:  timeZone: "America/New_York"
                //go to " http://momentjs.com/timezone/ " to get timezone
            });
        })

    } catch(err) {
        console.log(err);
    }

})(jQuery);
