# Run Your LLM Locally


If you use ChatGPT or any other AI regularly, you can try asking it for a detailed summary of everything it knows about you or even ask it to tell you something that you don’t know about yourself. For me, it shared my average message length in characters. This prompted me to look into whether it was possible to install a local LLM on my MacBook. There is a wide range of local LLM models that can be downloaded and run on any computer. Your options are based by your computer’s processing power. I downloaded an open-source model called Lllama with 8 billion parameters. I also installed a local interface that runs in the browser. It is offline and does not send any data to a server.

---

### Open WebUI Setup (Requires Ollama Server)

**1. Go to the official Ollama website**: [https://ollama.com/download/](https://ollama.com/download/)

**2. Download and install** the version for macOS**.

**3. After installation, Ollama should be running in the background. You can verify it by opening your terminal and running a simple model:**
   ```bash
   ollama run llama3
  ```
**4. Clone the latest Open WebUI repository**:
  ```bash
  git clone https://github.com/open-webui/open-webui.git
  ```
**5. Change directory to the backend folder**:
  ```bash
  cd open-webui/backend
  ```

**6. Install Open WebUI's dependencies using `uv`**:

This command installs the 'uv' runtime manager for MacOS.
  ```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
  ```

**7. Run the Open WebUI server**:

This command starts the web server. The output will show that it’s running. The `DATA_DIR` environment variable is set to store data in a specific location.
  ```bash
  DATA_DIR=~/.open-webui uvx --python 3.11 open-webui@latest serve
  ```
Once you run the final command, Open WebUI will be running. You can then open your web browser and go to [http://localhost:8080](http://localhost:8080) to access the user interface. Create an Open WebUI account and sign in to the platform. 

---

## Llama 3 Model Setup (Requires Apple Silicon)

This model runs smoothly but tends to hallucinate when the chat becomes longer. ChatGPT 4.0 is estimated to
use 1.8 billion parameters. There is a way to run a larger version of  the Llama 3 model with 70 billion parameters,
which is much more accurate than the 8 billion parameter model locally without considerable lagging. 
This requires using Apple Silicon.

**Steps:**

**1. Install the required MLX-LM library** (optimized for Apple Silicon):
  ```bash
  pip3 install mlx-lm
  ```

**2. Log in to Hugging Face**:
Llama 3 is a gated model, so you must be logged in. This command will prompt you for your access token.
You can generate one from your Hugging Face account settings.
  ```bash
  huggingface-cli login
  ```

**3. **'mlx-lm' Prerequsities.**
'mlx-lm' requires Python 3.9 or newer. You can check your version with 
```bash
python3 --version
```
You can check if `pip` (Python's package manager) is installed with
```bash
python3 -m pip --version
```

If `pip` requires an update, run:
```bash
python3 -m pip install --upgrade pip`
```

To confirm that the upgrade was successful, you can check `pip`'s version.
```bash
python3 -m pip --version
```

Run the following command to install mlx-lm. The `transformers` library is a key dependency for accessing models from Hugging Face.
```bash
python3 -m pip install mlx-lm
```

**3. Run the Llama 3 Model**:
The `mlx_lm` command will download the model files and start the chat session.
The initial download will take a while.
  ```bash
  mlx_lm chat --model mlx-community/Llama-3.3-70B-Instruct-8bit
 ```
 ```bash
 Calling `python -m mlx_lm.chat...` directly is deprecated. Use `mlx_lm.chat...` or `python -m mlx_lm chat ...` instead.
 Fetching 13 files:   0%|                                 | 0/13 [00:00<?, ?it/s]
 model-00008-of-00008.safetensors:  38%|█▌  | 1.01G/2.65G [07:59<07:36, 3.60MB/s]
 model-00005-of-00008.safetensors:  18%|▉    | 941M/5.29G [08:49<19:05, 3.80MB/s]
 model-00004-of-00008.safetensors:   1%|   | 67.1M/5.29G [07:19<9:08:03, 159kB/s]
 model-00001-of-00008.safetensors:  19%|▊   | 1.01G/5.27G [08:43<18:48, 3.78MB/s]
 model-00003-of-00008.safetensors:   4%|▏   | 201M/5.29G [08:49<3:16:28, 432kB/s]
 model-00002-of-00008.safetensors:   3%|    | 134M/5.29G [08:41<4:49:50, 297kB/s]
 model-00007-of-00008.safetensors:   1%|   | 67.8M/5.29G [08:56<8:16:10, 176kB/s]
 model-00006-of-00008.safetensors:   3%|    | 134M/5.29G [08:39<4:39:42, 307kB/s]
 ```
---

## Set Up Alias for Easy Access to the Model


To run the Llama model easily using the `llm` command, you can create an alias. 
This saves you from typing the full command every time.

**1. Open Your Shell Profile**:

Depending on which shell you use, open the appropriate configuration file in a text editor:
- **For Zsh** (default on macOS): Open `~/.zshrc`
- **For Bash**: Open `~/.bash_profile` or `~/.bashrc`

For example, if you use Zsh:

  ```bash
  nano ~/.zshrc
  ```

**2. Add the Alias**:
At the end of the file, add the following line to create the alias:
  ```bash
  alias llm="mlx_lm chat --model mlx-community/Llama-3.3-70B-Instruct-8bit"
  ```

**3. Save and Reload**:

After saving the file, reload the profile to apply the changes:
```bash
source ~/.zshrc  # For Zsh
```
Or for Bash:
```bash
source ~/.bash_profile
```

**4. Test the Alias:**

Now, in your terminal, you can simply type:
  ```bash
  llm
  ```

---

## Terminal Output Example

When you run the `llm` command, the model will start up. You should see something like this:

### Command List:
- `q` to exit
- `r` to reset the chat
- `h` to display these commands

---

## Sample Chat Interactions

```txt
>>> what unique travel destinations would work well for a weekend getaway?
Consider Asheville, Charleston, or Sedona for unique weekend getaways with charm!
>> can you recommend some impactful books on personal development?
Sure! Here are some impactful personal development books:
* "Atomic Habits" by James Clear
* "The 7 Habits of Highly Effective People" by Stephen R. Covey
* "Mindset" by Carol S. Dweck
* "Daring Greatly" by Brené Brown
* "The Power of Now" by Eckhart Tolle
>>> What are some effective methods for learning a new language?
Immerse, practice speaking, use apps, read, write daily, set goals, and be consistent.
```

