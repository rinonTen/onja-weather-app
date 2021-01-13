import React, { useState } from 'react';


export default function DateFormat() {
  const [dayFormated, setDayFormated] = useState("");
  const [monthFormated, setMonthFormated] = useState("");
    return { setDayFormated, dayFormated, monthFormated, setMonthFormated}
}
