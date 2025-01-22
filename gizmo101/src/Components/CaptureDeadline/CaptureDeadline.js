import React, {useState} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


function CaptureDeadline() {
    const userLocale = navigator.language || navigator.userLanguage;
    const dateFormatter = new Intl.DateTimeFormat(userLocale, {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
    const [deadline, setDeadline] = useState(null);
    const today = new Date();


    return (
        <div>
            <label htmlFor="deadline-picker">When do you need it by?</label>
            <DatePicker
                id="deadline-picker"
                selected={deadline}
                onChange={(date) => setDeadline(date)}
                minDate={today}
                placeholderText="set deadline"
                dateFormat={(date) => dateFormatter.format(date)}
                aria-label="Select deadline for creating your video"
                showPopperArrow={false}
                onFocus={(e) => e.target.readOnly=true}
                />
        </div>
    )
}
export default CaptureDeadline;