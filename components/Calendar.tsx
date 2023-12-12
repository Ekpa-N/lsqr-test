"use client"
import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import userstyles from "@/styles/usersPage.module.scss"

import 'react-calendar/dist/Calendar.css';


type CalendarProps = {
    handleDate: (date: string | Date | null | any[]) => void
}

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];


const TheCalendar: React.FC<CalendarProps> = ({ handleDate }) => {

    const tileClassName = () => {
        return 'filter-modal';
    };

    // onChange?: ((value: Value, event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined

    const onChange = (value: Value, event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
        handleDate(value)
    }

    return (
        <Calendar
            next2Label={"›"}
            nextLabel={"»"}
            onChange={onChange}
            value={new Date()}
            prevLabel="«"
            prev2Label="‹"
            className={"filter-modal"}
            tileClassName={tileClassName}
        />

    );
}

export default TheCalendar