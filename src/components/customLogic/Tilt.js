export const tilt = (elements, setting) => {
        elements.forEach((element) => {
          element.addEventListener("pointermove", handleMove);
          element.addEventListener("pointerleave", handleLeave);
          element.addEventListener("pointerenter", handleEnter);
        });
        function handleMove(e) {
          const target = e.currentTarget;
          if (!target) return
          const left = target.getBoundingClientRect().left
          const top = target.getBoundingClientRect().top
          const width = target.offsetWidth;
          const height = target.offsetHeight;
          let relativeX = e.clientX - (left + width / 2);
          let relativeY = e.clientY - (top + height / 2);
          const maxTilt = setting?.maxTilt || 25;
          let rotateX_affected = maxTilt * (relativeY / (height / 2));
          let rotateY_affected = maxTilt * (relativeX / (width / 2));
          let rotateY_unaffected = (rotateY_affected < -maxTilt
            ? -maxTilt
            : rotateY_affected > maxTilt
            ? maxTilt
            : rotateY_affected
          ).toFixed(2);
          let rotateX_unaffected = (rotateX_affected < -maxTilt
            ? -maxTilt
            : rotateX_affected > maxTilt
            ? maxTilt
            : rotateX_affected
          ).toFixed(2);
          const scale = setting?.scale || 1;
          target.style.transform = `perspective(${
            setting?.perspective || 1000
          }px) rotateX(${+rotateX_unaffected}deg) rotateY(${-rotateY_unaffected}deg) scale3d(${scale},${scale},${scale})`;
        }

  function handleLeave(e) {
          setInitialTransition(e);
        }
        function handleEnter(e) {
          setInitialTransition(e);
        }
        function setInitialTransition(e) {
          const target = e.currentTarget;
          clearTimeout(target.timerId);
          if (e.type === "pointerleave") {
            target.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`;
          }
          target.style.transition = `transform ${setting?.speed || 700}ms ${
            setting?.easing || "cubic-bezier(0.12, 1.09, 0, 0.75)"
          }`;
          target.timerId = setTimeout(() => {
            target.style.transition = "";
          }, setting?.speed || 700);
    }
    
}
      