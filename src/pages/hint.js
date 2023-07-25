import React, { useState, useEffect } from 'react'
import Plot from 'react-plotly.js'
import './style/page.css'
import Header from '../components/header'
import Footer from '../components/footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useParams } from 'react-router-dom'

const Hintpage = () => {
  const { studentid } = useParams();
  const [hints, setHints] = useState([]);
  const [graph, setGraph] = useState([]);
  const [student_id, setStudent_Id] = useState(studentid);
  const [toggle, setToggle] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);

  let hint_dict = {
    "123": ['Catch me if u can!', 'meow meow meow', 'I PWNED YOU!'],
    '6610746679': ['apple', 'cherry'],
    '6610744464': ['grape', 'banana'],
    '6610744710': ['cherry', 'kiwi'],
    '6610742579': ['mango', 'strawberry'],
    '6610741882': ['orange', 'cherry'],
    '6610748237': ['apple', 'kiwi'],
    '6610743627': ['banana', 'mango'],
    '6610741578': ['pineapple', 'apple'],
    '6610743860': ['banana', 'kiwi'],
    '6610740407': ['cherry', 'banana'],
    '6610741002': ['grape', 'strawberry'],
    '6610747623': ['strawberry', 'apple'],
    '6610742241': ['kiwi', 'orange'],
    '6610741042': ['orange', 'cherry'],
    '6610745690': ['strawberry', 'mango'],
    '6610741498': ['grape', 'apple'],
    '6610741502': ['apple', 'kiwi'],
    '6610747172': ['banana', 'cherry'],
    '6610743246': ['mango', 'orange'],
    '6610749083': ['pineapple', 'kiwi'],
    '6610746997': ['grape', 'orange'],
    '6610749119': ['cherry', 'banana'],
    '6610742881': ['apple', 'mango'],
    '6610743287': ['strawberry', 'cherry'],
    '6610740649': ['banana', 'orange'],
  };

  const fetchHints = () => {
    if (student_id in hint_dict){
      let data = hint_dict[student_id].map((each) =>
            <li>{each}</li>
      );
      setHints(data);
    } else {
      setHints([]);
    }
  };

  const updateGraph = () => {
    let data = [];

    for (let junior_id in matching_result){
      let val = matching_result[junior_id];
      let x_list = [val[0][0], val[1][0]];
      let y_list = [val[0][1], val[1][1]];
      let z_list = [val[0][2], val[1][2]];
  
      // dot
      if (junior_id === student_id){
        // You
        data.push({
          x: [val[0][0]],
          y: [val[0][1]],
          z: [val[0][2]],
          mode: 'markers',
          type: 'scatter3d',
          marker: {
            color: 'rgb(128, 0, 128)',
            size: 10,
            line: {
              color: 'rgba(217, 217, 217, 0.14)',
              width: 0.5
            },
            opacity: 1
          },
          name: 'You are here!',
        });

        // Your target
        data.push({
          x: [val[1][0]],
          y: [val[1][1]],
          z: [val[1][2]],
          mode: 'markers',
          type: 'scatter3d',
          marker: {
            color: 'rgb(219, 64, 82)',
            size: 10,
            line: {
              color: 'rgba(217, 217, 217, 0.14)',
              width: 0.5
            },
            opacity: 1
          },
          name: 'Your target',
        });

      } else {
        data.push({
          x: x_list,
          y: y_list,
          z: z_list,
          mode: 'markers',
          type: 'scatter3d',
          marker: {
            size: 6,
            line: {
              color: 'rgba(217, 217, 217, 0.14)',
              width: 0.5
            },
            opacity: 0.8
          },
          showlegend: false,
        });
      }
  
      // line
      data.push({
        x: x_list,
        y: y_list,
        z: z_list,
        mode: 'lines',
        type: 'scatter3d',
        showlegend: false,
      });
    }

    setGraph(data);
  }

  // useEffect(() => {
  //   if (studentid){
  //     console.log(studentid);
  //     setStudent_Id(studentid);
  //     setToggle(prevState => !prevState);
  //   }
  // }, []);

  useEffect(() => {
    fetchHints();
    updateGraph();
  }, [toggle]);

  useEffect(() => {
    const handleResize = () => {
        setScreenWidth(window.innerWidth)
        setScreenHeight(window.innerHeight)
    }

    window.addEventListener('resize', handleResize);

    return () => {
        window.removeEventListener('resize', handleResize)
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault(); // cancels the event if it is cancelable
    setToggle(prevState => !prevState);
  }

  // key: junior_id, val: [junior_xyz, senior_xyz]
  let matching_result = {
    '6610746679': [[0.8248, 0.4631, -1.8395], [-0.2198, -0.1522, -2.7764]],
    '6610744464': [[0.9807, -0.9492, 1.1393], [0.6404, -0.1536, 0.0678]],
    '6610744710': [[2.2489, -1.0123, 0.9195], [1.4132, 0.2068, 0.8865]],
    '6610742579': [[0.5115, -1.8618, -0.3151], [0.1456, -1.4026, 0.3738]],
    '6610741882': [[0.3972, -0.5738, 1.0154], [3.5723, 0.8313, 1.4690]],
    '6610748237': [[0.6406, -0.1588, 0.3822], [-0.5936, 0.4183, 0.2544]],
    '6610743627': [[-0.7937, 1.9113, -0.1406], [-1.7772, 0.8117, -0.2124]],
    '6610741578': [[1.3744, 1.6490, -0.5138], [0.7354, 2.3634, 2.5697]],
    '6610743860': [[-1.0461, -0.4515, -1.7571], [-2.8393, -0.4405, -2.4042]],
    '6610740407': [[0.7215, 0.5832, 0.1364], [2.1099, 1.7516, 0.3474]],
    '6610741002': [[-0.4991, -1.9839, -0.3895], [-1.6612, -2.3757, 0.8931]],
    '6610747623': [[1.5625, -2.1014, 0.4221], [-0.0621, -0.3281, 0.5831]],
    '6610742241': [[-0.6317, -0.0234, -2.0312], [-0.6141, 1.0749, -0.9338]],
    '6610741042': [[-1.2789, -2.5214, -0.2675], [-0.8496, 1.2513, -1.6158]],
    '6610745690': [[-0.8040, 1.3130, -0.9833], [0.6250, 3.1653, -1.4395]],
    '6610741498': [[0.9136, -2.0026, 1.4315], [-3.0156, 0.9431, 1.0596]],
    '6610741502': [[-1.1213, -1.4574, 0.1074], [-1.2393, -1.7999, 0.8229]],
    '6610747172': [[0.5802, -2.2466, -0.9477], [2.8973, -1.4330, -2.0867]],
    '6610743246': [[-1.0662, 1.5676, 2.8402], [-1.0257, 0.8108, 2.5288]],
    '6610749083': [[-1.7697, 0.9402, -1.6668], [-1.7817, 1.0852, 0.3913]],
    '6610746997': [[-1.0212, -0.2368, 0.1914], [-2.0511, -0.6695, 1.3451]],
    '6610749119': [[2.0789, 0.5587, -1.1859], [0.4732, 0.8823, -1.5398]],
    '6610742881': [[0.3953, 1.8833, 0.8567], [0.6017, 2.1341, -0.1354]],
    '6610743287': [[2.4990, -1.4387, -0.6744], [2.1960, -0.0218, 0.4554]],
    '6610740649': [[-1.4241, -0.7884, 1.9157], [-1.9528, -0.0147, 0.4507]]
  };

  var layout = {
    autosize: true,
    height: screenWidth >=768 ? screenHeight*0.7 : 250,
    width: screenWidth*0.5,
    scene: {
        aspectratio: {
            x: 1,
            y: 1,
            z: 1
        },
        camera: {
            center: {
                x: 0,
                y: 0,
                z: 0
            },
            eye: {
                x: 1.25,
                y: 1.25,
                z: 1.25
            },
            up: {
                x: 0,
                y: 0,
                z: 1
            }
        },
        xaxis: {
            type: 'linear',
            zeroline: false
        },
        yaxis: {
            type: 'linear',
            zeroline: false
        },
        zaxis: {
            type: 'linear',
            zeroline: false
        }
      },
      margin: {
        l: 40,
        r: 40,
        b: 40,
        t: 40
      },
      paper_bgcolor: 'rgb(250, 243, 240)',
      plot_bgcolor: 'rgb(250, 243, 240)',
  };

  return (
    <>
    <div className='page-background2 vh-100 d-flex justify-content-center align-items-center'>
      <div className='dark-overlay'></div>
      <Header />
      <div className={`h-100 ${screenWidth >= 768 ? 'flex-container' : 'd-flex flex-column justify-content-center align-items-center'}`}>
        <div className='roundborder mb-3 d-flex justify-content-center align-items-center' style={{height:`${screenWidth >= 768 ? screenHeight*0.75 : 270}px`, width: `${screenWidth >= 768 ? screenWidth*0.55 : 270}px`}}>
          <Plot
            data={graph}
            layout={layout}
          />
        </div>
        {/* `${screenWidth >= 768 ? height : ${screenHeight*0.75}px : auto}` */}
        {/* height:`${screenWidth >= 768 ? screenHeight*0.75 : 0}px` */}
        {/* style={{height:`${screenWidth >= 768 ? screenHeight*0.75 : 0}px`}} */}
        <div className={`glass ${screenWidth >= 768 ? 'h-75' : 'h-auto'}`}>
          <form className='d-flex justify-content-center text-light p-3' onSubmit={handleSubmit}>
              <div className={`input-group ${screenWidth >= 1024 ? 'd-flex w-100' : 'w-75'}`}>
              <input type="search" className="form-control" placeholder="รหัสนักศึกษา" onChange={event => setStudent_Id(event.target.value)} aria-label="Search" aria-describedby="search-addon" value={student_id}/>
              <button type="submit" className="btn input-group-text border-0" style={{ backgroundColor: '#fd7d14cf' }} id="search-addon">
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
              </div>
          </form>
          <ol className='text-light'>{hints}</ol>
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default Hintpage