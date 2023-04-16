import Card from "./ui/Card"

const ContentRow = () => {
    return (
    <div className="flex flex-col gap-2">

        <div className="font-bold flex text-xl text-white items-center">
          <div>Creato per te</div>
        </div>

        <div className="example pb-2 flex gap-3 md:gap-6 items-center justify-start overflow-x-auto">
            
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>

        </div>
    </div>
    )
}

export default ContentRow