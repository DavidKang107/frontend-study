// useEffect()가 실행되는 모든 케이스를 정리

import { useEffect } from "react";
import { useState } from "react";


function EffectSummary() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');


  // useEffect() 공통사항
  // 1) 렌더링 직후에 실행됨
  // 2) 마운트 시에는 무조건 실행됨
  // 3) return 하는 함수는 언마운트 시에 무조건 실행됨

  // 렌더링 될 때마다 (마운트 + 업데이트) 매번 실행됨
  useEffect(() => {
    console.log('나는 매번 실행됨');

    return () => {
      // 해당 effect가 실행되기 전과 언마운트 시 실행됨
    }
  });
  // 마운트 + count 변할 때 마다
  useEffect(() => {
    console.log('%ccount가 변함', 'color: red; background: #ffdae0;');

    return () => {
      // 해당 effect가 실행되기 전과 언마운트 시 실행됨
    }
  }, [count]);
  
  useEffect(() => {
    console.log('%cname이 변함', 'color: blue; background: #e2d6fd;');

    return () => {
      // 해당 effect가 실행되기 전과 언마운트 시 실행됨
    }
  }, [name]);
  
  useEffect(() => {
    console.log('%c마운트 될 떄만', 'color: yellow; background: black;');

    return () => {
      // 해당 effect가 실행되기 전과 언마운트 시 실행됨
    }
  }, []);
  useEffect(() => {
    // console.log('%c언마운트 될 떄만', 'color: yellow; background: black;');

    return () => {
      console.log('언마운트 될때만 실행');
    }
  }, []);
  return (
    <>
      <p>카운트: {count}</p>
      <button type="button" onClick={() => setCount(count + 1)}>카운트 + 1</button>
      <p>이름: {name}</p>
      <input type="text" value={name} onChange={e => setName(e.target.value)}/>
    </>
  );
};

export default EffectSummary;