import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectOrders } from './orderSlice';

export default function Order() {
  const order = useSelector(selectOrders);
  const dispatch = useDispatch();

  return (
    <div>
      {/* ctrl z kyu bnahu ho rha  kyuki bhot phele hi edited hai itna purana nhi aata wapis */}
    </div>
  );
}
