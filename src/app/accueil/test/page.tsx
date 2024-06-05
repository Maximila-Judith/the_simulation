'use client'

import React, { useState } from 'react';
import crypto from 'crypto';

export default function Page () {
    const app = document.getElementById('app');
    const resultCode = crypto.randomBytes(3).toString('hex').toUpperCase();
    console.log(resultCode)
   
    return(
    <p id="app"> Bonjour </p>
    )
}
