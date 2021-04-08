const [current, setCurrent] = useState(0);
    const [marginLeft, setMarginLeft] = useState(0)
    const [prop, setProp] = useState("Residential")
    const length = slides.length;
    const elems = useRef([]);
    const leftClick = (e) => {
        setCurrent(current => current === 0 ? length - 1 : current - 1);
    }
    const rightClick = (e) => {
        setCurrent(current => current === length - 1  ? 0 : current + 1);
    }
    const dropper = useRef(null)
    const handleClick = (e) => {
        const target = e.target.closest("[datatype]")
        if(!target) return
        if (target.tagName !== 'LI') return
        setProp(target.getAttribute('datatype'))
        Array.from(target.parentElement.children).forEach(li=>li.classList.remove('selected'))
        target.classList.add('selected')
    }

    useEffect(() => {
        setMarginLeft(current*elems.current[0].offsetWidth)
        if (elems.current.length) {
            elems.current[current].classList.add('active')
        }
        return () => {
            elems.current[current].classList.remove('active')
        }
    }, [current])
    useEffect(() => {
        elems.current[0].style.marginLeft = `-${marginLeft}px`
    }, [marginLeft])