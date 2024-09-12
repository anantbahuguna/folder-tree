import './App.css'

type INODE = {
  name: string;
  isFolder: boolean;
  children: INODE[] | null;
}

type NodeProps = {
  data: INODE;
}

const ROOT_NODE_DATA: INODE = {
    name: "Home",
    isFolder: true,
    children: [{
      name: "Movies",
      isFolder: true,
      children: [{
        name: "Oppenheimer",
        isFolder: false,
        children: null
      }]
    },
    {
      name: 'TV Shows',
      isFolder: true,
      children: null
    },
    {
      name: 'Settings',
      isFolder: false,
      children: null
    }
  ]
} 

function App() {

  return (
    <div className="container">
      <Node data={ROOT_NODE_DATA}/>
    </div>
  )
}

const Node = ({data}: NodeProps) => {
  const { name, isFolder, children } = data
  const hasChildren = children && children.length > 0;
  return(
    <div className="node">
      {/* Folder name */}
      {isFolder ? 
        <div className={`${isFolder ? 'folder' : 'file'}`}>{hasChildren ? ">": ""} {name} 🗃️</div> 
      : <div className="file">{name} 📁</div>}
      {
        children && children.length > 0 ? 
        <div className="children">
          {children.map((child, index) => <Node key={index} data={child}/>)}
        </div> 
        : null
      }
      
    </div>  
  )
}

export default App
