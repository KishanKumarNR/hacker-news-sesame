import React from 'react';
import { ThemeProvider } from "styled-components";
import { colorsDark } from "../../styles/palette";

import List from "../List";
import {Wrapper, Title} from "./styles";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "../Loader";


import './App.css';


class App extends React.Component {

    componentDidMount() {
        this.props.fetchStoriesFirstPage()
    }

    fetchStories = () => {
        const { storyIds, page, fetchStories, isFetching } = this.props;
        if (!isFetching) {
            fetchStories({storyIds, page});
        }
    }

    render() {
      const { stories, hasMoreStories } = this.props;

    return (
        <ThemeProvider theme={colorsDark}>
          <div>
            <Wrapper>
              <Title>
                Hacker News Reader
              </Title>
                <InfiniteScroll
                    dataLength = {stories.length}
                    next={this.fetchStories}
                    hasMore={hasMoreStories}
                    loader={<Loader/>}
                    style={{
                        height: "100%",
                        overflow: "visible",
                    }}
                >
              <List stories={stories}/>
                </InfiniteScroll>
            </Wrapper>
          </div>
        </ThemeProvider>
    );
  }
}

export default App;