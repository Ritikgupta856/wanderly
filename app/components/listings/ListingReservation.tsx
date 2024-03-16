'use client'

import {Range } from "react-date-range";
import Calendar from "../inputs/Calendar";
import Button from "../Button";

interface ListingReservationProps{
    price:number;
    totalPrice: number | undefined;
    onChangeDate:(value:Range) => void;
    dateRange:Range;
    onSubmit: () => void;
    disabled?:boolean;
    disabledDates:Date[]
}

const ListingReservation:React.FC<ListingReservationProps> = ({
    price,totalPrice,onChangeDate,dateRange,disabled,disabledDates,onSubmit
}) => {
    return (
        <div className="bg-white rounded-xl border-[1px] overflow-hidden border-neutral-200">
            <div className="flex flex-row items-center gap-1 p-4">
                <div className="text-2xl font-semibold">
                &#8377; {price.toLocaleString('en-IN')} /
                </div>

                <div className="font-light text-neutral-600">
                       night
                </div>

                </div>
                <hr/>

                <Calendar
                value={dateRange}
                disabledDates={disabledDates}
                onChange={(value)=>onChangeDate(value.selection)}
                />

                <hr/>


                <div className="p-4">
                       <Button disabled={disabled} label="Reserve" onClick={onSubmit} />
                </div>

                <div className="p-4 flex flex-row items-center justify-between font-semibold text-lg">
                    <div>
                        Total
                    </div>

                    <div>
                    &#8377;{totalPrice?.toLocaleString('en-IN')}
                    </div>

                </div>
        
    
        </div>
    );
}

export default ListingReservation