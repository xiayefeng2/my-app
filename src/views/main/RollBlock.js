import React, {
  useCallback
} from 'react';
import store, { incremented, decremented } from '@/store'
import * as css from './index.module'
function MyBlock() {
  const memoizedCallback = useCallback((type) => {
    if (type === 'add') {
      store.dispatch(incremented())
    } else if (type === 'minus') {
      store.dispatch(decremented())
    }
  }, [])
  return (
    <>
      <div className={css.add} onClick={e =>  memoizedCallback('add')}>测试数据 + </div>
      <div className={css.minus} onClick={e => memoizedCallback('minus')}>测试数据 -</div>
    </>
  )
}
export default MyBlock