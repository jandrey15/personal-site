import useProgress from 'hooks/useProgress'

const ProgressBar = () => {
  const [max, refProgress] = useProgress()

  return (
    <progress id='progress' ref={refProgress} value={0} max={max} />
  )
}

export default ProgressBar
