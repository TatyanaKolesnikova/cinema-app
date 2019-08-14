import React, {useState} from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Card, Select, Icon, Radio, Collapse} from 'antd';

const { Panel } = Collapse;
const { Meta } = Card;
const { Option } = Select;

const MainPage = ({ movies, genres}) => {
    const [filterMovies, setFilterMovies] = useState([]);
    const [valueInput, setValueInput] = useState("");
    const [valueSelect, setValueSelect] = useState("");

    const getFilterMovies = (valueInput, valueSelect) => {
        return movies.reduce((acc, item) => {
            const hasValue = valueInput && valueSelect;
            const hasGenre = item.genre && item.genre.length && item.genre.some(elem => elem.trim() === valueSelect);
            const hasTitle = item.title.toLowerCase().includes(valueInput.toLowerCase());

            if(hasValue && hasGenre && hasTitle){
                acc.push(item);
            }else if (valueInput && !valueSelect && hasTitle){
                acc.push(item);
            }else if(!valueInput && valueSelect && hasGenre){
                acc.push(item);
            }
            return acc;

        }, []);

    }
    console.log(filterMovies);
    const handleChangeInput = (e) => {
        const {value} = e.target;
        setValueInput(value);
        setFilterMovies(getFilterMovies(value, valueSelect));
        console.log(value, valueSelect);
    }
    const handleChangeSelect = (e) => {
        const {value} = e.target;
        setValueSelect(value);
        setFilterMovies(getFilterMovies(valueInput, value));
        console.log(!!value);
    }
    const genExtra = () => (
        <Icon
            type="setting"
            onClick={event => {
                // If you don't want click extra trigger collapse, you can prevent this:
                event.stopPropagation();
            }}
        />
    );

    return (
        <div className="row-list-movies">
            <Collapse
                expandIconPosition='right'
            >
                <Panel header="Фильтрация фильмов" key="1" extra={genExtra()}>
                    <div className="hold-input">
                        <div className='col-70'>
                            <h3>Поиск по жанрам </h3>
                            <Radio.Group onChange={handleChangeSelect} defaultValue={false} >
                                <Radio  key={genres.length + 1}  value={false}>Все</Radio>
                                {
                                    genres.map((item, i) => (<Radio  key={i}  value={item}>{item}</Radio>))
                                }
                            </Radio.Group>
                        </div>
                        <div className='col-30'>
                            <h3>Поиск по названию</h3>
                            <input type="text" name="filter-name" onChange={handleChangeInput} value={valueInput} />
                        </div>
                        {/*<Select onChange={handleChangeSelect} allowClear>*/}
                        {/*    {*/}
                        {/*        genres.map((item, i) => (<Option key={i} value={item}>{item}</Option>))*/}
                        {/*    }*/}
                        {/*</Select>*/}
                    </div>
                </Panel>
            </Collapse>

            {
                filterMovies.length ? filterMovies.map(item => (
                    <div key={item._id} className="card-movie">
                        <Link to={"/movie/" + item._id} >
                            <Card
                                hoverable
                                cover={<img alt="example" src={item.poster}/>}
                            >
                                <Meta title={item.title}/>
                            </Card>
                        </Link>
                    </div>
                )) : movies.map(item => (
                    <div key={item._id} className="card-movie">
                        <Link to={"/movie/" + item._id} >
                            <Card
                                hoverable
                                cover={<img alt="example" src={item.poster}/>}
                            >
                                <Meta title={item.title}/>
                            </Card>
                        </Link>
                    </div>
                ))
            }
        </div>

    );
};

const mapStateToProps = (state) => ({
    movies: state.data.movies,
    genres: state.data.genres
});

export const MainPageContainer = connect(mapStateToProps)(MainPage);