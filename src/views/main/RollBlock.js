import React, {
  useCallback
} from 'react';
import store, { incremented, decremented, selectCount, incrementByAmount } from '@/store'
import { useSelector, useDispatch } from 'react-redux';
import * as css from './index.module'
function MyBlock() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const memoizedCallback = useCallback((type) => {
    if (type === 'add') {
      store.dispatch(incremented())
    } else if (type === 'minus') {
      store.dispatch(decremented())
    }
  }, [])
  return (
    <>
      <div>{count}</div>
      <div className={css.add} onClick={e =>  memoizedCallback('add')}>测试数据 + </div>
      <div className={css.minus} onClick={e => memoizedCallback('minus')}>测试数据 -</div>
      <div onClick={() => dispatch(incrementByAmount(5))}>加5</div>
    </>
  )
}
export default MyBlock