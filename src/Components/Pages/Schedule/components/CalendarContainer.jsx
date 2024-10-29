import styled from "styled-components";

const CalendarContainer = styled.div`
    margin-top: 50px;
    height: 100vh;
    width: 100%;


    .rbc-toolbar{
        height: 10vh;
        color: #bbb;
        font-size: 15px;
    }
    .rbc-btn-group > button{
        border: 0;
    }
    .rbc-toolbar button{
        color: #cecece;
        border: 1px solid #cccccc4f;
    }
    .rbc-toolbar button:active,
    .rbc-toolbar button.rbc-active{
        background-color: #56565686;
        border-color: #bbb;
    }

    /*Corpo*/
    /*Linhas*/
    .rbc-month-view{
        border-color: #eeeeee5f;
    }
    .rbc-month-row+ .rbc-month-row {
        border-color: #dddddd73;
    }
    .rbc-day-bg + .rbc-day-bg {
        border-color: #dddddd73;
    }
    /*Mes*/
    .rbc-header{
        color: #eeeeeeee;
        border-color: #dddddd73;
    }
    .rbc-header + .rbc-header{
        border-top: 0px;
        border-left: 0px;
        border-right: 0px;
        border-color: #dddddd73;
    }
    .rbc-off-range-bg{
        background-color: #313131;
    }
    .rbc-today{
        background-color: #1a1a1a;
    }
    .rbc-button-link{
        margin: 5px;
        font-size: 15px;
        color: #eeeeeee5;
    }
    .rbc-off-range .rbc-button-link{
        color: #eeeeee37;
    }
    .rbc-now .rbc-button-link{
        background-color: #f15550;
        color: #ffffff;
        border-radius: 2px;
        padding-left: 2px;
        padding-right: 2px;
        margin: 5px;
        font-size: 16px;
    }
    .rbc-time-content,.rbc-time-content > .rbc-day-slot,.rbc-timeslot-group, .rbc-time-slot{
        color: #bbb;
        border-color: #b0b0b036;
    }
    .rbc-day-slot .rbc-time-slot{
        border-top: 1px solid #c8c8c80a;
    }
    /*Agenda*/
    .rbc-agenda-content, .rbc-agenda-view{
        color: #aaa;
    }
    .rbc-agenda-date-cell, .rbc-agenda-time-cell{
        background-color: #262626;
    }
    .rbc-agenda-event-cell{
        border-radius: 20px;
        font-weight: bold;
        color: #e0e0e0;
    }
`

export default CalendarContainer