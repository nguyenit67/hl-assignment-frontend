import { NO_JOKES_MESSAGE } from '@/constants/common';
import jokes from '@/constants/jokes';
import StorageKeys from '@/constants/storage-keys';
import { useState } from 'react';

export default function JokesPage() {
  const [votedResults, setVotedResults] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(StorageKeys.VOTED_RESULTS)) || [];
    } catch (err) {
      return [];
    }
  });

  const availableJokes = jokes.filter((joke) => {
    return votedResults.findIndex((votedJoke) => votedJoke.id === joke.id) === -1;
  });
  const isJokesAvailable = availableJokes.length > 0;

  const randomJoke = isJokesAvailable ? availableJokes[Math.floor(Math.random() * availableJokes.length)] : null;

  const handleVote = (jokeId, isJokeFunny) => {
    const jokeRecord = {
      id: jokeId,
      isFunny: isJokeFunny,
    };
    const newVotedResults = [...votedResults, jokeRecord];

    localStorage.setItem(StorageKeys.VOTED_RESULTS, JSON.stringify(newVotedResults));
    setVotedResults(newVotedResults);
  };

  return (
    <div className="joke-page">
      <div className="container">
        <div className="hero container-fluid">
          <div className="hero__content">
            <h1 className="hero__title">A joke a day keeps the doctor away.</h1>
            <p className="hero__subtitle">If you joke the wrong way, you teeth have to pay. (Serious)</p>
          </div>
        </div>

        {!randomJoke ? (
          <p className="joke-page__content">{NO_JOKES_MESSAGE}</p>
        ) : (
          <>
            <p className="joke-page__content">{randomJoke.content}</p>

            <div className="voting-buttons">
              <button className="vote-button" onClick={() => handleVote(randomJoke.id, true)}>
                This is Funny!
              </button>
              <button className="vote-button" onClick={() => handleVote(randomJoke.id, false)}>
                This is not funny.
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
