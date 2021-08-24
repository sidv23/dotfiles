# Added by Siddharth
export LC_ALL=en_US.UTF-8

export CLICOLOR=1
export LSCOLORS=ExFxBxDxCxegedabagacad
alias cwd='printf "%s\n" "$(pwd)" | tee >(pbcopy)'
alias chcwd='cd "$(pbpaste)"'
alias resource='source ${HOME}/.zshrc'
alias julia_vscode='tmux a -t julia_vscode'

export PYTHONSTARTUP=~/.pythonrc
# export R_HOME=/Library/Frameworks/R.framework/Resources
export RSTUDIO_PANDOC=/Applications/RStudio.app/Contents/MacOS/pandoc

# Starship
# eval "$(starship init zsh)"

# Set Spaceship ZSH as a prompt
autoload -U promptinit; promptinit
prompt spaceship

# SPACESHIP_CHAR_SYMBOL="\uf0e7 "
# SPACESHIP_CHAR_SYMBOL="\uE0B0 "
# SPACESHIP_CHAR_SYMBOL="\u27A4 "
# SPACESHIP_CHAR_SYMBOL="\u27FF"
# SPACESHIP_CHAR_SYMBOL="\u27A4"
# SPACESHIP_CHAR_SYMBOL="\u2192"
# SPACESHIP_CHAR_SYMBOL="❯_"
SPACESHIP_CHAR_SYMBOL="\u25B6"
# SPACESHIP_CHAR_PREFIX="\uf296"
SPACESHIP_CHAR_SUFFIX=" "
SPACESHIP_CHAR_PREFIX=""
SPACESHIP_BATTERY_SHOW=true

# If you come from bash you might have to change your $PATH.
# export PATH=$HOME/bin:/usr/local/bin:$PATH

# Path to your oh-my-zsh installation.
export ZSH="/Users/vishwanathgl/.oh-my-zsh"

# Set name of the theme to load --- if set to "random", it will
# load a random theme each time oh-my-zsh is loaded, in which case,
# to know which specific one was loaded, run: echo $RANDOM_THEME
# See https://github.com/ohmyzsh/ohmyzsh/wiki/Themes
# ZSH_THEME="robbyrussell"

# Set list of themes to pick from when loading at random
# Setting this variable when ZSH_THEME=random will cause zsh to load
# a theme from this variable instead of looking in $ZSH/themes/
# If set to an empty array, this variable will have no effect.
# ZSH_THEME_RANDOM_CANDIDATES=( "robbyrussell" "agnoster" )

# Uncomment the following line to use case-sensitive completion.
# CASE_SENSITIVE="true"

# Uncomment the following line to use hyphen-insensitive completion.
# Case-sensitive completion must be off. _ and - will be interchangeable.
# HYPHEN_INSENSITIVE="true"

# Uncomment the following line to disable bi-weekly auto-update checks.
# DISABLE_AUTO_UPDATE="true"

# Uncomment the following line to automatically update without prompting.
# DISABLE_UPDATE_PROMPT="true"

# Uncomment the following line to change how often to auto-update (in days).
# export UPDATE_ZSH_DAYS=13

# Uncomment the following line if pasting URLs and other text is messed up.
# DISABLE_MAGIC_FUNCTIONS="true"

# Uncomment the following line to disable colors in ls.
# DISABLE_LS_COLORS="true"

# Uncomment the following line to disable auto-setting terminal title.
# DISABLE_AUTO_TITLE="true"

# Uncomment the following line to enable command auto-correction.
ENABLE_CORRECTION="true"

# Uncomment the following line to display red dots whilst waiting for completion.
# Caution: this setting can cause issues with multiline prompts (zsh 5.7.1 and newer seem to work)
# See https://github.com/ohmyzsh/ohmyzsh/issues/5765
# COMPLETION_WAITING_DOTS="true"

# Uncomment the following line if you want to disable marking untracked files
# under VCS as dirty. This makes repository status check for large repositories
# much, much faster.
DISABLE_UNTRACKED_FILES_DIRTY="true"

# Uncomment the following line if you want to change the command execution time
# stamp shown in the history command output.
# You can set one of the optional three formats:
# "mm/dd/yyyy"|"dd.mm.yyyy"|"yyyy-mm-dd"
# or set a custom format using the strftime function format specifications,
# see 'man strftime' for details.
# HIST_STAMPS="mm/dd/yyyy"

# Would you like to use another custom folder than $ZSH/custom?
# ZSH_CUSTOM=/path/to/new-custom-folder

# Which plugins would you like to load?
# Standard plugins can be found in $ZSH/plugins/
# Custom plugins may be added to $ZSH_CUSTOM/plugins/
# Example format: plugins=(rails git textmate ruby lighthouse)
# Add wisely, as too many plugins slow down shell startup.
plugins=(git vscode zsh-autosuggestions)

source $ZSH/oh-my-zsh.sh

# User configuration

# export MANPATH="/usr/local/man:$MANPATH"

# You may need to manually set your language environment
# export LANG=en_US.UTF-8

# Preferred editor for local and remote sessions
# if [[ -n $SSH_CONNECTION ]]; then
#   export EDITOR='vim'
# else
#   export EDITOR='mvim'
# fi

# Compilation flags
# export ARCHFLAGS="-arch x86_64"

# Set personal aliases, overriding those provided by oh-my-zsh libs,
# plugins, and themes. Aliases can be placed here, though oh-my-zsh
# users are encouraged to define aliases within the ZSH_CUSTOM folder.
# For a full list of active aliases, run `alias`.
#
# Example aliases
alias zshconfig="nvim ~/.zshrc"
alias vimconfig="nvim ~/.vim/vimrc"
alias nvimconfig="nvim ~/.config/nvim/init.vim"
alias vim-pkgconfig="nvim ~/.config/nvim/vim-plug/plugins.vim"

alias r="radian"

alias ohmyzsh="nvim ~/.oh-my-zsh"
alias spaceship-dir="/usr/local/lib/node_modules/spaceship-prompt"
alias spaceship-char-dir="nvim /usr/local/lib/node_modules/spaceship-prompt/sections/char.zsh"


alias kitty-config="nvim ~/.config/kitty/kitty.conf"
bindkey "\e[1;3D" backward-word # ⌥←
bindkey "\e[1;3C" forward-word # ⌥→

# SKHD and YABAI Configurations

alias skhd-config='nvim ~/.config/skhd/skhdrc'
alias skhd-resource='brew services restart skhd'

alias limelight-config='nvim ~/.config/limelight/limelightrc'
# alias limelight-resource='brew services restart skhd'


alias yabai-config='nvim ~/.config/yabai/yabairc'
alias yabai-resource='launchctl kickstart -k "gui/${UID}/homebrew.mxcl.yabai"'

alias spacebar-config='nvim ~/.config/spacebar/spacebarrc'
alias spacebar-resource='launchctl kickstart -k "gui/${UID}/homebrew.mxcl.spacebar"'

alias logout="sudo launchctl bootout user/$(id -u vishwanathgl)"

source ~/z.sh
test -e "${HOME}/.iterm2_shell_integration.zsh" && source "${HOME}/.iterm2_shell_integration.zsh"

alias icat="kitty +kitten icat"
alias ovim="vim"
alias vim="nvim"

alias tmux-julia="tmux a -t julia_vscode"
alias tmux-kill="tmux kill-window -t"

# Show Phone
alias show-phone="./Downloads/git-repos/Android-Display/show-phone.sh --wifi"



# Neofetch
neofetch
